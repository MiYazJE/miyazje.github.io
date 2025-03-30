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

export const collections = { projects }