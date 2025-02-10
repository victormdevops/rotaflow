import axios from "axios";

// Fallback to "/api" if env is missing or misconfigured
const baseURL = import.meta.env.VITE_API_URL || "/api";

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;
