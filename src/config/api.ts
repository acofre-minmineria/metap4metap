const isDevelopment = import.meta.env.DEV;

export const API_URL = isDevelopment
  ? 'http://localhost:3000/api'
  : 'https://TU_BACKEND_URL.onrender.com/api'; // Cambia esto por tu URL de Render/Railway

export const config = {
  apiUrl: API_URL,
  isDevelopment,
};
