import { serialize } from 'next-mdx-remote/serialize';
import { IArticle } from '../types';

export const serializerForMarkdown = async (item: IArticle) => {
  const body = await serialize(item.attributes.Body as string);

  return {
    ...item,
    attributes: {
      ...item.attributes,
      Body: body,
    },
  };
};
