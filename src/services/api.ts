import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth endpoints
export const login = (email: string, password: string) => 
  api.post('/auth/login', { email, password });

export const register = (name: string, email: string, password: string) => 
  api.post('/auth/register', { name, email, password });

// Room endpoints
export const getRooms = () => 
  api.get('/rooms');

export const bookRoom = (roomId: number, dates: { checkIn: Date; checkOut: Date }) => 
  api.post(`/rooms/${roomId}/book`, dates);

// Review endpoints
export const getReviews = () => 
  api.get('/reviews');

export const createReview = (review: { rating: number; comment: string }) => 
  api.post('/reviews', review);

// Add auth interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});