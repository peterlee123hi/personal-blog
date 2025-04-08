import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await Promise.all([
		getCollection('thoughts'),
		getCollection('engineering'),
	]);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [
			...posts[0].map((post) => ({
				...post.data,
				link: `/thoughts/${post.id}/`,
			})),
			...posts[1].map((post) => ({
				...post.data,
				link: `/engineering/${post.id}/`,
			})),
		],
	});
}
