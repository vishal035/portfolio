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
    <div className="relative flex flex-col w-11/12 mx-auto my-2 py-6 pl-4 pr-12 bg-transparent backdrop-blur-3xl rounded-md items-center ">
      <div className="relative w-full h-72 ">
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
      <div className="relative top-0 left-0 w-full p-4">
        <Link href={`/blog/${article.attributes.Post_Title}`}>
          <span className="text-3xl text-white font-semibold md:font-bold cursor-pointer">
            {article.attributes.Title}
            <div className="text-white font-thin hidden md:block md:font-normal text-sm md:text-lg tracking-wider leading-relaxed">
              {article.attributes.description.trim().length > 265
                ? `${article.attributes.description}...`
                : article.attributes.description}
            </div>
            <AuthorCard article={article} />
            <span className="inline-block font-bold md:block text-3xl text-primary-green hover:after:content-['→'] after:ml-1 after:font-bold after:text-3xl hover:after:ml-1 after:text-primary-green">
              Read more
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCardWithImage;
