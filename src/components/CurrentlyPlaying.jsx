// MyReactComponent.jsx
import React from "react";
import { useLastFM } from "use-last-fm";

const CurrentlyPlaying = () => {
	const lastFM = useLastFM("AbdallahAHO", "ed1bfb5cb9c759f5a032ed7233ea462e");

	if (lastFM.status !== "playing") {
		return null;
	}

	return (
		<>
			<h2 className="text-lg font-bold mb-4 text-light-text dark:text-dark-text">
				I'm listening to this now
			</h2>
			<div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text rounded-lg flex items-center space-x-4">
				<img
					src={lastFM.song.art}
					alt={`${lastFM.song.name} album art`}
					className="w-16 h-16 rounded-md shadow-md"
				/>
				<div className="flex-1">
					<h3 className="font-semibold text-lg">{lastFM.song.name}</h3>
					<p className="text-sm text-light-text/80 dark:text-dark-text/80">
						{lastFM.song.artist}
					</p>
					<p className="text-xs text-light-text/60 dark:text-dark-text/60">
						{lastFM.song.album}
					</p>
				</div>
				<a
					href={lastFM.song.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-light-accent dark:text-dark-accent hover:text-light-text hover:dark:text-dark-text transition-colors duration-300 ease-in-out"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
						alt="Listen on Last.fm"
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
