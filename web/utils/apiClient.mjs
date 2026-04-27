import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://pruebarailway2-production.up.railway.app",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

export function getAuthenticatedClient(idToken) {
  return axios.create({
    baseURL: "https://pruebarailway2-production.up.railway.app",
    headers: { Authorization: `Bearer ${idToken}` },
  });
}
