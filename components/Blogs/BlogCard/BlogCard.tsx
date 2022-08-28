import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../../../types';
import { FormatDate } from '../../../utils';
import AuthorCard from '../../Author/AuthorCard';

interface IPropsTypes {
  article: IArticle;
}

const BlogCard = ({ article }: IPropsTypes) => {
  return (
    <div>
      <Link href={`/${article.attributes.Post_Title}`}>
        <h1 className="text-xl text-gray-600 font-bold hower:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.Title}
        </h1>
      </Link>
      <AuthorCard article={article} />
      <div className="text-gray-500">
        {article.attributes.description.trim().length > 265
          ? `${article.attributes.description}...`
          : article.attributes.description}
      </div>
    </div>
  );
};

export default BlogCard;
