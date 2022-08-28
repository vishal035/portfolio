import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../../../types';
import AuthorCard from '../../Author/AuthorCard';

interface IPropsTypes {
  article: IArticle;
}

const BlogCardWithImage = ({ article }: IPropsTypes) => {
  // console.log(article.attributes.Featured_Image.data[0].attributes.url);
  return (
    <div className="relative mx-auto my-2 py-6 pl-4 pr-12 bg-primary-black backdrop-blur-md rounded-md items-center flex h-fit w-11/12">
      <div className="relative w-64 h-36">
        <Image
          className="rounded-md"
          src={article.attributes.Featured_Image.data[0].attributes.url}
          // src={`https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png`}
          layout={'fill'}
          // height={360}
          // width={640}
          alt={article.attributes.Title}
        />
      </div>
      <Link href={`/blog/${article.attributes.Post_Title}`}>
        <span className="text-sm md:text-3xl w-2/3 text-white p-4 font-light md:font-bold cursor-pointer">
          {article.attributes.Title}
          <div className="text-white font-thin hidden md:block md:font-normal text-sm md:text-lg tracking-wider leading-relaxed">
            {article.attributes.description.trim().length > 265
              ? `${article.attributes.description}...`
              : article.attributes.description}
          </div>
          <AuthorCard article={article} />
          <span className="font-bold hidden md:block text-base text-primary-green-1 after:content-['→'] after:ml-3.5 after:font-bold after:text-lg hover:after:ml-5 after:text-primary-green-1">
            Read more
          </span>
        </span>
      </Link>
    </div>
  );
};

export default BlogCardWithImage;
