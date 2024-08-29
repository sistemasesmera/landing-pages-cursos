// src/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://pages-cursos-unas-backend-api.onrender.com/", // Cambia esto con tu endpoint
  timeout: 10000, // Tiempo de espera para la solicitud
  headers: {
    "Content-Type": "application/json",
    // Otros encabezados comunes
  },
});

export default api;
