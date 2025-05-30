import { writeFile } from 'node:fs/promises';
import { getLastFmNowPlaying } from '../../lib/lastfm.js';

const dataFilePath = new URL('../../../data/latest-song.json', import.meta.url);

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
