import React from 'react';
import { useRouter } from 'next/router';
import { ICategory } from '../../../types';
import Link from 'next/link';

interface IPropsTypes {
  categories: ICategory[];
}
const BlogCategories = ({ categories }: IPropsTypes) => {
  const router = useRouter();
  const isActiveLink = (category: ICategory) => {
    return category.attributes.Title_URL === router.query.category;
  };

  console.log({ category: categories.map((cat) => cat.attributes.Title) });
  return (
    <>
      <div className="relative top-0 left-0">
        <ul className="flex flex-row items-center text-primary-green overflow-x-scroll ">
          <li
            className={`mx-2 px-4 py-2 capitalize inline-flex flex-row items-center justify-center rounded-full text-lg bg-primary-black hover:scale-110 ${
              !router.query.category ? 'border-2 border-primary-green' : ''
            }`}
          >
            <Link href="/blog">All</Link>
          </li>
          {categories.map((category) => {
            return (
              <li
                key={category.id}
                className={`mx-2 px-4 py-2 capitalize inline-flex flex-row items-center justify-center rounded-full text-lg bg-primary-black hover:scale-110 ${
                  isActiveLink(category) ? 'border-2 border-primary-green' : ''
                }`}
              >
                <a href={`/blog/${category.attributes.Title_URL}`}>
                  {category.attributes.Title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BlogCategories;
