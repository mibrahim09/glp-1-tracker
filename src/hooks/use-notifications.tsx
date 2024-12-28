import { apiClient } from "@/shared/api-client.ts";

export const useNotifications = () => {
  const getNotifications = async () => {
    try {
      return await apiClient("/medications/recent-reports");
    } catch (error) {
      console.error(error);
    }
  };

  return { getNotifications };
};
