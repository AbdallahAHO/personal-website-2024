import { useCallback, useEffect, useState } from 'react';

const CurrentlyPlaying = () => {
	const [currentSong, setCurrentSong] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchSong = useCallback(async () => {
		try {
			const response = await fetch('/api/latest-song');
			if (!response.ok) throw new Error('Failed to fetch song');
			const data = await response.json();
			setCurrentSong(data);
		} catch (err) {
			setError(err.message);
			console.error('Error fetching song:', err);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchSong();
		// Poll for updates every 30 seconds
		const interval = setInterval(fetchSong, 30000);
		return () => clearInterval(interval);
	}, [fetchSong]);

	if (error) {
		return (
			<div className="text-red-500 dark:text-red-400 animate-fade-in">
				Failed to load currently playing song
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="animate-pulse space-y-4">
				<div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-48" />
				<div className="flex items-center space-x-4">
					<div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg" />
					<div className="flex-1 space-y-2">
						<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
						<div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
						<div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
					</div>
				</div>
			</div>
		);
	}

	if (!currentSong) {
		return null;
	}

	const headerText = currentSong.isPlaying ? 'Currently Playing' : 'Last Played';

	return (
		<div className="animate-fade-in space-y-4">
			<h2 className="text-xl font-semibold text-light-text dark:text-dark-text">{headerText}</h2>
			<div className="flex items-center space-x-4 group">
				<div className="relative">
					<img
						src={currentSong.art}
						alt={`${currentSong.name} album art`}
						className="w-16 h-16 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
						loading="lazy"
					/>
					{currentSong.isPlaying && (
						<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
							<div className="w-2 h-2 bg-white rounded-full animate-ping" />
						</div>
					)}
				</div>
				<div className="flex-1 min-w-0">
					<h3 className="font-medium text-base truncate">{currentSong.name}</h3>
					<p className="text-sm text-light-text/80 dark:text-dark-text/80 truncate">
						{currentSong.artist}
					</p>
					<p className="text-xs text-light-text/60 dark:text-dark-text/60 truncate">
						{currentSong.album}
					</p>
				</div>
				<a
					href={currentSong.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-light-accent dark:text-dark-accent hover:text-light-text hover:dark:text-dark-text transition-all duration-300 ease-in-out transform hover:scale-110"
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
		</div>
	);
};

export { CurrentlyPlaying };
