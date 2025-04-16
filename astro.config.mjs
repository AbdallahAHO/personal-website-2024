import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://abdallahaho.com',
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [
		mdx(),
		sitemap({
			// Filter out draft pages
			filter: (page) => !page.includes('/draft/'),
			// Set default changefreq and priority
			changefreq: 'weekly',
			priority: 0.7,
			// Use custom XSL stylesheet
			xslURL: '/sitemap.xsl',
			// Customize sitemap entries
			serialize: (item) => {
				// Set higher priority for important pages
				if (item.url === 'https://abdallahaho.com/') {
					return {
						...item,
						priority: 1.0,
						changefreq: 'daily',
					};
				}
				// Set medium priority for blog and projects
				if (item.url.includes('/blog/') || item.url.includes('/projects/')) {
					return {
						...item,
						priority: 0.8,
						changefreq: 'weekly',
					};
				}
				// Set lower priority for other pages
				return {
					...item,
					priority: 0.5,
					changefreq: 'monthly',
				};
			},
		}),
		tailwind(),
		react(),
	],
	vite: {
		resolve: {
			alias: {
				'@components': '/src/components',
				'@layouts': '/src/layouts',
				'@types': '/src/types',
				'@lib': '/src/lib',
				'@consts': '/src/consts',
				'@assets': '/src/assets',
			},
		},
	},
});
