import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";

type Context = {
	site: string;
};

export async function GET(context: Context) {
	const [blog, projects] = await Promise.all([
		getCollection("blog"),
		getCollection("projects"),
	]);

	const items = [...blog, ...projects]
		.filter((item) => !item.data.draft)
		.sort(
			(a, b) =>
				new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
		);

	return rss({
		title: HOME.TITLE,
		description: HOME.DESCRIPTION,
		site: context.site,
		items: items.map((item) => ({
			title: item.data.title,
			description: item.data.description,
			pubDate: new Date(item.data.date),
			link: `/${item.collection}/${item.slug}/`,
		})),
	});
}
