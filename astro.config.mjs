import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https:/abdallahaho.com',
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [mdx(), sitemap(), tailwind(), react()],
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
