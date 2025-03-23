import axios from "axios";

// Set base URL dynamically (change for production)
const API_BASE_URL = import.meta.env.VITE_API_URL || "/api"; 

const apiClient = axios.create({
    baseURL: API_BASE_URL});

const getRandomKitty = async () => {
    try {
        const response = await apiClient.get("api/kittys/search");
        return response.data;
    } catch (error) {
        console.error("❌ Error fetching random kitty:", error);
        return null;
    }
};

// Export using modern shorthand
export default { getRandomKitty };
