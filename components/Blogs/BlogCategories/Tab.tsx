import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ICategory } from '../../../types';

interface IPropsTypes {
  categories: ICategory[];
}

const Tab = ({ categories }: IPropsTypes) => {
  const router = useRouter();
  const isActiveLink = (category: ICategory) => {
    return category.attributes.Title_URL === router.query.category;
  };

  return (
    <>
      <div className="relative top-0 left-0 container flex items-center justify-between ">
        <ul className="flex mx-auto items-center">
          <li
            className={
              'mr-6 px-4 py-2 border-2 rounded-full transition-all hover:scale-110 hover:bg-primary-green-1 ' +
              `${
                router.pathname === '/blog' || router.pathname === '/blog'
                  ? ' border-primary-green text-primary-green bg-primary-black'
                  : ' border-primary-green text-primary-green bg-primary-black'
              }`
            }
          >
            <Link href="/blog">All</Link>
          </li>
          {categories.map((category) => {
            return (
              <li
                key={category.id}
                className={
                  'mr-6 px-4 py-2 last:mr-0 border-2 rounded-full transition-all hover:scale-110 hover:bg-primary-green-1 ' +
                  `${
                    isActiveLink(category)
                      ? ' border-primary-green-1 text-primary-green bg-primary-black'
                      : ' border-primary-green text-primary-green bg-primary-black'
                  }`
                }
              >
                <Link href={`/category/${category.attributes.Title_URL}`}>
                  {category.attributes.Title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Tab;
