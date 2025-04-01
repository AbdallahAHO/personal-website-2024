import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		draft: z.boolean().optional(),
	}),
});

const work = defineCollection({
	type: 'content',
	schema: z.object({
		company: z.string(),
		role: z.string(),
		brief: z.string(),
		dateStart: z.coerce.date(),
		dateEnd: z.union([z.coerce.date(), z.string()]),
	}),
});

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		draft: z.boolean().optional(),
		demoURL: z.string().optional(),
		repoURL: z.string().optional(),
	}),
});

const now = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		lastUpdated: z.string(),
	}),
});

export const collections = { now, blog, work, projects };
