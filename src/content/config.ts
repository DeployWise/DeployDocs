import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { 'docs':docs };