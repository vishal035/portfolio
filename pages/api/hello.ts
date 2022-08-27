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

// // Categories Fetch
// export const fetchCategories = async () => api.get('/api/categories');

// // Fetch Articles
// export const fetchArticles = async (queryString: string) =>
//   api.get(`/api/posts?${queryString}`);

// export const fetchArticleBySlug = async (queryString: string) =>
//   api.get(`/api/posts?${queryString}`);
