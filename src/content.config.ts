import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const thoughts = defineCollection({
	// Load Markdown and MDX files in the `src/content/thoughts/` directory.
	loader: glob({ base: './src/content/thoughts', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
	}),
});

export const collections = { thoughts };
