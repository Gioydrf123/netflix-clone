import axios from 'axios';

const apiClient = axios.create({
	  withCredentials: true,
});

export const fetchMovie = (id: string) => apiClient.get(`/api/movies/${id}`).then(res => res.data);
export const addFavorite = (movieId: string) => apiClient.post('/api/favorite', { movieId }).then(res => res.data);
export const removeFavorite = (movieId: string) => apiClient.delete('/api/favorite', { data: { movieId } }).then(res => res.data);
export const registerUser = (data: { email: string; name: string; password: string }) => apiClient.post('/api/register', data).then(res => res.data);
