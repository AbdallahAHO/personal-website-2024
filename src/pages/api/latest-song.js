import { writeFile } from 'node:fs/promises';

const LASTFM_API_KEY = 'ed1bfb5cb9c759f5a032ed7233ea462e';
const LASTFM_USERNAME = 'AbdallahAHO';

const dataFilePath = new URL('../../../data/latest-song.json', import.meta.url);

async function getLastFmNowPlaying() {
	const response = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
	);
	const data = await response.json();
	const track = data.recenttracks?.track?.[0];

	if (!track) return null;

	return {
		name: track.name,
		artist: track.artist['#text'],
		album: track.album['#text'],
		art: track.image[2]['#text'],
		url: track.url,
		isPlaying: track['@attr']?.nowplaying === 'true',
	};
}

export const GET = async () => {
	try {
		const track = await getLastFmNowPlaying();

		if (!track) {
			return new Response(JSON.stringify({ error: 'No track found' }), {
				status: 404,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		return new Response(JSON.stringify(track), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error in GET:', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch song data' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};

export const POST = async ({ request }) => {
	try {
		const songData = await request.json();
		await writeFile(dataFilePath, JSON.stringify(songData), 'utf-8');
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (_error) {
		return new Response(JSON.stringify({ error: 'Failed to save data' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
};
