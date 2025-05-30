export const LASTFM_API_KEY = 'ed1bfb5cb9c759f5a032ed7233ea462e';
export const LASTFM_USERNAME = 'AbdallahAHO';

export async function getLastFmNowPlaying() {
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
