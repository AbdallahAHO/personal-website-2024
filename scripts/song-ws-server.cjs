const http = require('node:http');
const fs = require('node:fs');
const { writeFile } = require('node:fs/promises');
const path = require('node:path');
const nodeAdapter = require('crossws/adapters/node').default;
// Load environment variables from .env if present
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
	const envLines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
	for (const line of envLines) {
		const match = line.match(/^([^#=]+)=([\s\S]*)$/);
		if (match && !process.env[match[1]]) {
			process.env[match[1]] = match[2].trim();
		}
	}
}
let lastTrack = null;
const dataFilePath = path.resolve(__dirname, '../data/latest-song.json');
async function getNowPlaying() {
	const mod = await import('../src/lib/lastfm.js');
	return mod.getLastFmNowPlaying();
}
const wss = nodeAdapter({
	hooks: {
		open(peer) {
			if (lastTrack) {
				peer.send(JSON.stringify(lastTrack));
			}
		},
	},
});
const server = http.createServer();
server.on('upgrade', (req, socket, head) => {
	wss.handleUpgrade(req, socket, head);
});
async function checkSong() {
	try {
		const track = await getNowPlaying();
		if (track && JSON.stringify(track) !== JSON.stringify(lastTrack)) {
			lastTrack = track;
			const data = JSON.stringify(track);
			await writeFile(dataFilePath, data, 'utf-8');
			for (const peer of wss.peers) {
				peer.send(data);
			}
		}
	} catch (err) {
		console.error('Failed to fetch song:', err);
	}
}
setInterval(checkSong, 15000);
checkSong();
const PORT = process.env.SONG_WS_PORT || 3001;
server.listen(PORT, () => {
	console.log(`WebSocket server listening on ws://localhost:${PORT}`);
});
