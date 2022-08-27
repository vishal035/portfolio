import axios from 'axios';

const api = axios.create({
  baseURL: process.env.STRAPI_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
  },
});

// Categories Fetch
export const fetchCategories = async () => api.get('/api/categories');

// Fetch Articles
export const fetchArticles = async (queryString: string) =>
  api.get(`/api/posts?${queryString}`);

export const fetchArticleBySlug = async (queryString: string) =>
  api.get(`/api/posts?${queryString}`);
