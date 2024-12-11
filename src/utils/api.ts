import axios from 'axios';
import { API_BASE_URL,API_KEY } from './constant';


export const fetchMovies = async (params: Record<string, string>) => {
  const response = await axios.get(API_BASE_URL, {
    params: { apiKey: API_KEY, ...params },
  });
  return response.data;
};

export const fetchMovieDetails = async (id: string) => {
  const response = await axios.get(API_BASE_URL, {
    params: { apiKey: API_KEY, i: id },
  });
  return response.data;
};
