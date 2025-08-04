import { api } from "@/shared/api/api.services";
import type { ResGetProfile } from "@/shared/api/api.types";
import { useQuery } from "@tanstack/react-query";

export const useProfileQuery = (id: string) =>
  useQuery<ResGetProfile>({
    queryKey: ["profile", id],
    queryFn: () => api.getProfile(id),
    staleTime: 1000 * 60 * 5,
  });
