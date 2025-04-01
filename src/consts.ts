import type { Metadata, Site, Socials } from '@types';

export const SITE: Site = {
	NAME: 'Abdallah Othman',
	EMAIL: 'abdallah.ali.hassan@gmail.com',
	NUM_POSTS_ON_HOMEPAGE: 3,
	NUM_WORKS_ON_HOMEPAGE: 1,
	NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
	TITLE: 'Home',
	DESCRIPTION:
		"Abdallah's personal website and blog, showcasing my work and thoughts on technology.",
};

export const BLOG: Metadata = {
	TITLE: 'Blog',
	DESCRIPTION:
		'A collection of articles on topics I am passionate about in tech and software development.',
};

export const WORK: Metadata = {
	TITLE: 'Work',
	DESCRIPTION: 'My professional experience and career journey in software development.',
};

export const PROJECTS: Metadata = {
	TITLE: 'Projects',
	DESCRIPTION:
		'A showcase of my personal and open-source projects, with links to repositories and demos.',
};

export const NOW: Metadata = {
	TITLE: 'Now',
	DESCRIPTION: "What I'm currently focused on and working on.",
};

export const SOCIALS: Socials = [
	{
		NAME: 'twitter-x',
		HREF: 'https://twitter.com/AbdallahAHO',
	},
	{
		NAME: 'github',
		HREF: 'https://github.com/AbdallahAHO',
	},
	{
		NAME: 'linkedin',
		HREF: 'https://www.linkedin.com/in/AbdallahAHO/',
	},
	{
		NAME: 'email',
		HREF: `mailto:${SITE.EMAIL}`,
	},
];
