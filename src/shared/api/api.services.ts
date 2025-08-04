import axios from "axios";
import { ResGetProfile } from "./api.types";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  withCredentials: true,
});

const getProfile = async (id: string) => {
  const response = await axiosInstance.get<ResGetProfile>(`profile/${id}`);
  return response.data;
};

export const api = {
  getProfile
};

export default axiosInstance;