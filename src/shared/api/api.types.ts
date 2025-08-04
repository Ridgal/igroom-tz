import { z } from "zod";

// Схема для города
const CitySchema = z.object({
  id: z.string(),
  name: z.string(),
});

// Основная схема профиля
const ProfileDataSchema = z.object({
  id: z.string(),
  role: z.string(),
  name: z.string().min(2, "Имя слишком короткое"),
  nickname: z.string(),
  avatar_url: z.string().url("Некорректный URL аватара"),
  age: z.number().int().positive("Возраст должен быть положительным числом"),
  city: CitySchema,
  is_private: z.boolean(),
  telegram: z.string().optional(), // Если поле необязательное
  about: z.string().optional(),
  points: z.number().int().nonnegative(),
  calling_limit: z.number().int().nonnegative(),
  going_limit: z.number().int().nonnegative(),
  account_status: z.string(),
  last_login_at: z
    .string()
    .datetime({ message: "Некорректная дата последнего входа" }),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

// Схема для всего ответа API
export const GetProfileResponseSchema = z.object({
  data: ProfileDataSchema,
});

// Тип, автоматически выводимый из схемы
export type ResGetProfile = z.infer<typeof GetProfileResponseSchema>;
