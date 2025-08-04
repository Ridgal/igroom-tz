import { api } from "@/shared/api/api.services";
import {
  GetProfileResponseSchema,
  type ResGetProfile,
} from "@/shared/api/api.types";
import { useQuery } from "@tanstack/react-query";

export const useProfileQuery = (id: string) =>
  useQuery<ResGetProfile>({
    queryKey: ["profile", id],
    queryFn: async () => {
      const data = await api.getProfile(id);
      return GetProfileResponseSchema.parse(data); // Валидация здесь
    },
    staleTime: 1000 * 60 * 5,
  });
