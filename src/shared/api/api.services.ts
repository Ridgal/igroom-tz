import axios from "axios";
import { safeParse } from "../lib/zod";
import { GetProfileResponseSchema, ResGetProfile } from "./api.types";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  withCredentials: true,
});

const getProfile = async (id: string): Promise<ResGetProfile> => {
  const response = await axiosInstance.get(`profile/${id}`);
  return safeParse(GetProfileResponseSchema, response.data);
};

export const api = {
  getProfile
};

export default axiosInstance;