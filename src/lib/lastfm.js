export const LASTFM_API_KEY =
	import.meta.env.PUBLIC_LASTFM_API_KEY || process.env.PUBLIC_LASTFM_API_KEY;
export const LASTFM_USERNAME =
	import.meta.env.PUBLIC_LASTFM_USERNAME || process.env.PUBLIC_LASTFM_USERNAME;

export async function getLastFmNowPlaying() {
	if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
		throw new Error('Missing Last.fm environment variables');
	}
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
