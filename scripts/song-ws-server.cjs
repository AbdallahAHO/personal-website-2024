const http = require('node:http');
const { writeFile } = require('node:fs/promises');
const nodeAdapter = require('crossws/adapters/node').default;
let lastTrack = null;
const path = require('node:path');
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
