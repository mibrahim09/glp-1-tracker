const BASE_URL = "http://localhost:3000";
export const apiClient = async (
  endpoint: string,
  options: RequestInit = {},
) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};
