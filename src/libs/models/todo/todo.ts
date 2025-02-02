import { z } from 'zod'

export const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  isCompleted: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Todo = z.infer<typeof todoSchema>
