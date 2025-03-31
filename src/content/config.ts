import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    urls: z.object({
      website: z.string().url().nullable(),
      github: z.string().url().nullable(),
    }),
    tags: z.array(z.string()),
    sortOrder: z.number()
  })
})

const experiences = defineCollection({
  schema: z.object({
    company: z.string(),
    title: z.string(),
    current: z.boolean().default(false),
    date: z.date(),
    descriptions: z.array(z.string())
  })
})


export const collections = { projects, experiences }