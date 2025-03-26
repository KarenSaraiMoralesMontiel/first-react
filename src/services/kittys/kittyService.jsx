import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api", // Matches your Vite proxy prefix
  headers: {
    'x-api-key': import.meta.env.VITE_API_KEY // Fixed env variable name
  }
});

const getRandomKitty = async () => {
  try {
    // Remove duplicate "/api" since baseURL already includes it
    const response = await apiClient.get("/api/kittys/search"); 
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching random kitty:", error.response?.data || error.message);
    return null;
  }
};

export default { getRandomKitty };
