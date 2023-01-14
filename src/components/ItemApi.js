import axios from 'axios';

const API_KEY = '30923283-33d2e606614da3e7093560986';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.parameters = {
  orientation: 'horizontal',
  per_page: 12,
  image_type: 'photo',
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`q=${query}&page=${page}`);
  return data;
};
