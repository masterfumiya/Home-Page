import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    date: z.string(),
    repoUrl: z.string().url(),
    demoUrl: z.string().url(),
    featured: z.boolean().default(false)
  })
});

export const collections = { projects };
