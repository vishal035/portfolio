import React from 'react';
import Image from 'next/image';
import { IArticle } from '../../types';
import { FormatDate } from '../../utils';

interface IPropsTypes {
  article: IArticle;
}

const AuthorCard = ({ article }: IPropsTypes) => {
  return (
    <div className="hidden md:flex items-center my-4">
      <div className="rounded-full overflow-hidden flex items-center justify-center mr-4">
        <Image
          src={
            article.attributes.author.data.attributes.avatar.data.attributes
              .formats.thumbnail.url
          }
          height={42}
          width={42}
          alt={
            article.attributes.author.data.attributes.username +
            ' ' +
            article.attributes.author.data.attributes.lastname
          }
        />
      </div>
      <span className="flex flex-row items-center text-sm font-medium text-white">
        {article.attributes.author.data.attributes.firstname +
          ' ' +
          article.attributes.author.data.attributes.lastname}
        <span className=" block bg-white ml-2 w-[1px] h-5 rounded-full contents-[' ']"></span>
        <span className=" ml-2 font-normal text-white">
          {FormatDate(article.attributes.publishedAt)}
        </span>
      </span>
    </div>
  );
};

export default AuthorCard;
