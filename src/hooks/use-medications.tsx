import { apiClient } from "@/shared/api-client.ts";

export const useMedications = () => {
  const getMedications = async () => {
    try {
      return await apiClient("/medications");
    } catch (error) {
      console.error(error);
    }
  };

  return { getMedications };
};
