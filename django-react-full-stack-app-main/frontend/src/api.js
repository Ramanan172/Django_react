import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const apiURL = "https://97cda304-9537-4bbd-a3e3-059414b22bea-dev.e1-us-east-azure.choreoapis.dev/djangoreactfullstackapp/backend/rest-api-be2/v1";

const baseURL = import.meta.env.VITE_API_URL || apiURL;

const api = axios.create({
	baseURL: baseURL
});

api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem(ACCESS_TOKEN)
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},

	(error) => {
		return Promise.reject(error)
	}
)

export default api