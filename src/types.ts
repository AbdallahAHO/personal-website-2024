export type Site = {
	NAME: string;
	EMAIL: string;
	NUM_POSTS_ON_HOMEPAGE: number;
	NUM_WORKS_ON_HOMEPAGE: number;
	NUM_PROJECTS_ON_HOMEPAGE: number;
	LANGUAGE: string;
	LOCALE: string;
	KEYWORDS: string[];
	TWITTER_HANDLE: string;
	TWITTER_CARD_TYPE: string;
	OG_TYPE: string;
	OG_IMAGE: string;
	OG_IMAGE_ALT: string;
	OG_IMAGE_WIDTH: string;
	OG_IMAGE_HEIGHT: string;
};

export type Metadata = {
	TITLE: string;
	DESCRIPTION: string;
	KEYWORDS: string[];
};

export type Socials = {
	NAME: string;
	HREF: string;
}[];
