import { z } from 'zod';
export const createTaskSchema=z.object({title:z.string().trim().min(1).max(200),description:z.string().trim().max(2000).optional(),priority:z.enum(['low','medium','high','urgent']).default('medium'),status:z.enum(['todo','in-progress','completed']).default('todo'),dueDate:z.string().datetime().optional(),category:z.string().trim().max(50).optional(),tags:z.array(z.string().trim().min(1).max(30)).max(20).default([])});
export const updateTaskSchema=createTaskSchema.partial();
