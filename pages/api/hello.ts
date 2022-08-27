// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  res.status(200).send({ status: '🚀 All API Routes are UP and Running ⚡⚡' });
}

// const api = axios.create({
//   baseURL: process.env.API_BASE_URL,
//   headers: {
//     Authorization: `Bearer ${process.env.API_AUTH_KEY}`,
//   },
// });

// // Categories Fetch
// export const fetchCategories = async () => api.get('/api/categories');

// // Fetch Articles
// export const fetchArticles = async (queryString: string) =>
//   api.get(`/api/posts?${queryString}`);

// export const fetchArticleBySlug = async (queryString: string) =>
//   api.get(`/api/posts?${queryString}`);
