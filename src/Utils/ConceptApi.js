import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const ConceptApi = {
  get_all: async (pages) => {
    const response = await axios.get(`${API_URL}/concepts?page=${pages}`);
    return response.data;
  },
  get_one: async (id) => {
    const response = await axios.get(`${API_URL}/concepts/${id}`);
    return response.data;
  },
  
  post: async (path, data) => {
    const response = await axios.post(`${API_URL}/concepts`, data);
    return response.data;
  },

  put: async (path, data) => {
    const response = await axios.put(`${API_URL}/concepts`, data);
    return response.data;
  },

  delete: async (path, params) => {
    const response = await axios.delete(`${API_URL}/concepts`, { params });
    return response.data;
  },
};

export default ConceptApi;
