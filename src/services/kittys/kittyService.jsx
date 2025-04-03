import axios from "axios"

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "http://localhost:3001/api",  // Remove :PORT
  headers: {
    'x-api-key': import.meta.env.VITE_API_KEY,
    'Accept': 'application/json', 
    'Content-Type': 'application/json'
  },
  withCredentials: true // If using authentication
})


const getRandomKitty = async () => {
  try {
    // Remove duplicate "/api" since baseURL already includes it
    const response = await apiClient.get("/kittys/search", {
        headers: {
            'Content-Type': 'application/json'
        }
    }); 
    console.log(import.meta.env.VITE_BASE_URL + "/api")
    //console.log("Env:", JSON.stringify(import.meta.env));
    return response.data
  } catch (error) {
    console.error("❌ Error fetching random kitty:", error.response?.data || error.message)
    return null
  }
};

export default { getRandomKitty };
