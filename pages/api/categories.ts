import { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  status: string;
}

export default async function category(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/categories`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`,
      },
    }
  );

  res.status(200).send(await response.json());
}
