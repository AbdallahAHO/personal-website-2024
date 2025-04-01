import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/
Disallow: /api/

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: AdsBot-Google
Disallow: /

Crawl-delay: 10

Host: ${new URL('', import.meta.env.SITE).host}
Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}

# No AI Content Scraping
X-Robots-Tag: noai, noimageai
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
