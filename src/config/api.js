

const getApiBaseUrl = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  if (import.meta.env.PROD) {
    return '/api';
  }
  
  return 'http://localhost:3000/api';
};

const API_BASE_URL = getApiBaseUrl();

export default API_BASE_URL;

