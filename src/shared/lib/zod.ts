import { z } from "zod";

export function safeParse<T>(schema: z.ZodSchema<T>, data: unknown): T {
  try {
    return schema.parse(data);
  } catch (err) {
    console.error("Zod validation error:", err);
    throw new Error("Invalid data format");
  }
}
