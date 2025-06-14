import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.object({
        source: image(),
        alt: z.string(),
    }),
    author: z.object({
        name: z.string(),
        link: z.string().url().optional(),
    }),
    tags: z.array(z.string()).optional(),
    link: z.string().optional(),
    draft: z.boolean().optional().default(false),
    nav_order: z.number().optional(), // This is key
  }),
});

const postsCollection = defineCollection({ // If you use a separate 'posts' collection
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.object({
      source: image(),
      alt: z.string(),
    }),
    author: z.object({
      name: z.string(),
      link: z.string().optional(),
    }),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'posts': postsCollection,
};