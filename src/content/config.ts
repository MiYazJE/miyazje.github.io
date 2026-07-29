import { defineCollection, z } from 'astro:content';

const localizedText = z.object({
  en: z.string(),
  es: z.string(),
});

const localizedList = z.object({
  en: z.array(z.string()),
  es: z.array(z.string()),
});

const projects = defineCollection({
  schema: z.object({
    title: localizedText,
    img: z.string(),
    description: localizedText,
    urls: z.object({
      website: z.string().url().nullable(),
      github: z.string().url().nullable(),
    }),
    tags: z.array(z.string()),
    sortOrder: z.number(),
  }),
});

const experiences = defineCollection({
  schema: z.object({
    company: z.string(),
    title: localizedText,
    current: z.boolean().default(false),
    date: z.date(),
    descriptions: localizedList,
  }),
});


export const collections = { projects, experiences };
