import type { Metadata, Site, Socials } from '@types';

export const SITE: Site = {
	NAME: 'Abdallah Othman',
	EMAIL: 'abdallah.ali.hassan@gmail.com',
	NUM_POSTS_ON_HOMEPAGE: 3,
	NUM_WORKS_ON_HOMEPAGE: 1,
	NUM_PROJECTS_ON_HOMEPAGE: 2,
	LANGUAGE: 'en',
	LOCALE: 'en_US',
	KEYWORDS: ['Frontend Development', 'TypeScript', 'React', 'Node.js', 'AI', 'LLMs', 'Growth Engineering'],
	TWITTER_HANDLE: '@AbdallahAHO',
	TWITTER_CARD_TYPE: 'summary_large_image',
	OG_TYPE: 'website',
	OG_IMAGE: '/nano.png',
	OG_IMAGE_ALT: 'Abdallah Othman - Frontend Engineer',
	OG_IMAGE_WIDTH: '1200',
	OG_IMAGE_HEIGHT: '630',
};

export const HOME: Metadata = {
	TITLE: 'Home',
	DESCRIPTION:
		"Abdallah's personal website and blog, showcasing my work and thoughts on technology.",
	KEYWORDS: ['Frontend Engineer', 'Technical Lead', 'TypeScript', 'React', 'Node.js', 'AI', 'LLMs'],
};

export const BLOG: Metadata = {
	TITLE: 'Blog',
	DESCRIPTION:
		'A collection of articles on topics I am passionate about in tech and software development.',
	KEYWORDS: ['Tech Blog', 'Software Development', 'Frontend', 'TypeScript', 'React', 'AI'],
};

export const WORK: Metadata = {
	TITLE: 'Work',
	DESCRIPTION: 'My professional experience and career journey in software development.',
	KEYWORDS: ['Work Experience', 'Career', 'Software Development', 'Frontend', 'Technical Lead'],
};

export const PROJECTS: Metadata = {
	TITLE: 'Projects',
	DESCRIPTION:
		'A showcase of my personal and open-source projects, with links to repositories and demos.',
	KEYWORDS: ['Projects', 'Open Source', 'GitHub', 'TypeScript', 'React', 'Node.js'],
};

export const NOW: Metadata = {
	TITLE: 'Now',
	DESCRIPTION: "What I'm currently focused on and working on.",
	KEYWORDS: ['Current Projects', 'Focus', 'Work in Progress', 'Learning'],
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
