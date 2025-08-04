import { z } from "zod";

const CitySchema = z.object({
  id: z.string(),
  name: z.string(),
});


const ProfileDataSchema = z.object({
  id: z.string(),
  role: z.string(),
  name: z.string().min(2, "Имя слишком короткое"),
  nickname: z.string(),
  avatar_url: z.string().url("Некорректный URL аватара"),
  age: z.number().int().positive("Возраст должен быть положительным числом"),
  city: CitySchema,
  is_private: z.boolean(),
  telegram: z.string().optional(),
  about: z.string().optional(),
  points: z.number().int().nonnegative(),
  calling_limit: z.number().int().nonnegative(),
  going_limit: z.number().int().nonnegative(),
  account_status: z.string(),
  last_login_at: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const GetProfileResponseSchema = z.object({
  data: ProfileDataSchema,
});

export type ResGetProfile = z.infer<typeof GetProfileResponseSchema>;
