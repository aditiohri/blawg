import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        isDraft: z.boolean(),
        title: z.string(),
        date: z.date(),
        author: z.string(),
        desc: z.string(),
        img: z.string().url().optional(),
        imgWidth: z.number().optional(),
        imgHeight: z.number().optional(),
        tags: z.array(z.string()).optional()
    })
})

export const collections = {
    'blog': blogCollection
}