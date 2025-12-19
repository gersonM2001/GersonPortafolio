import { defineCollection } from "astro:content";
import { z } from "zod";

const proyectosEs = defineCollection({
  schema: z.object({
    slug: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    lang: z.string().optional(),
  }),
});

const proyectosEn = defineCollection({
  schema: z.object({
    slug: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    lang: z.string().optional(),
  }),
});

export const collections = {
  proyectosEs,
  proyectosEn,
};
