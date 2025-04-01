import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLastFM } from 'use-last-fm';

const CurrentlyPlaying = () => {
	const lastFM = useLastFM('AbdallahAHO', 'ed1bfb5cb9c759f5a032ed7233ea462e');
	const [latestSong, setLatestSong] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchLatestSong = useCallback(async () => {
		try {
			const response = await fetch('/api/latest-song');
			if (!response.ok) throw new Error('Failed to fetch latest song');
			const data = await response.json();
			if (!lastFM.song) {
				setLatestSong(data);
			}
		} catch (err) {
			setError(err.message);
			console.error('Error fetching latest song:', err);
		} finally {
			setIsLoading(false);
		}
	}, [lastFM.song]);

	const saveLatestSong = useCallback(async (song) => {
		try {
			const response = await fetch('/api/latest-song', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(song),
			});
			if (!response.ok) throw new Error('Failed to save song');
			const data = await response.json();
			console.log('Song saved:', data);
		} catch (err) {
			console.error('Error saving song:', err);
		}
	}, []);

	useEffect(() => {
		if (!lastFM.song) {
			fetchLatestSong();
		} else {
			setIsLoading(false);
		}
	}, [lastFM.song, fetchLatestSong]);

	useEffect(() => {
		if (
			lastFM.status === 'playing' &&
			lastFM.song &&
			(!latestSong ||
				lastFM.song.name !== latestSong.name ||
				lastFM.song.artist !== latestSong.artist)
		) {
			setLatestSong(lastFM.song);
			saveLatestSong(lastFM.song);
		}
	}, [lastFM.status, lastFM.song, latestSong, saveLatestSong]);

	const currentSong = useMemo(() => lastFM.song || latestSong, [lastFM.song, latestSong]);

	if (error) {
		return (
			<div className="text-red-500 dark:text-red-400">Failed to load currently playing song</div>
		);
	}

	if (isLoading) {
		return (
			<div className="animate-pulse">
				<div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-4" />
				<div className="flex items-center space-x-4">
					<div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-md" />
					<div className="flex-1">
						<div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
						<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
					</div>
				</div>
			</div>
		);
	}

	if (!currentSong) {
		return null;
	}

	const isCurrentlyPlaying = lastFM.status === 'playing';
	const headerText = isCurrentlyPlaying ? "I'm listening to this now" : 'I last listened to';

	return (
		<>
			<h2 className="text-lg font-bold mb-4 text-light-text dark:text-dark-text">{headerText}</h2>
			<div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text rounded-lg flex items-center space-x-4 p-4">
				<img
					src={currentSong.art}
					alt={`${currentSong.name} album art`}
					className="w-16 h-16 rounded-md shadow-md"
					loading="lazy"
				/>
				<div className="flex-1">
					<h3 className="font-semibold text-lg">{currentSong.name}</h3>
					<p className="text-sm text-light-text/80 dark:text-dark-text/80">{currentSong.artist}</p>
					<p className="text-xs text-light-text/60 dark:text-dark-text/60">{currentSong.album}</p>
				</div>
				<a
					href={currentSong.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-light-accent dark:text-dark-accent hover:text-light-text hover:dark:text-dark-text transition-colors duration-300 ease-in-out"
					aria-label="Listen on Last.fm"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<title>Listen on Last.fm</title>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</a>
			</div>
		</>
	);
};

export { CurrentlyPlaying };
