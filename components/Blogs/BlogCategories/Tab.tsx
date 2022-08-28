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
      <div className="relative top-0 left-0 flex items-center justify-between ">
        <ul className="flex mx-auto items-center ">
          <li
            className={
              'mr-4 px-4 py-2 text-sm rounded-full transition-all hover:scale-110 ' +
              `${
                router.pathname === '/blog' || router.pathname === '/blog'
                  ? 'border-2 border-primary-green text-primary-green bg-primary-black'
                  : ' border-primary-black text-primary-green bg-primary-black'
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
                  'mr-4 last:mr-0 rounded-full transition-all hover:scale-110 hover:bg-primary-green' +
                  `${
                    isActiveLink(category)
                      ? 'border-2 border-primary-green text-primary-green bg-primary-black'
                      : ' border-primary-black text-primary-green bg-primary-black'
                  }`
                }
              >
                <a
                  className="px-8 py-4 text-lg"
                  href={`/category/${category.attributes.Title_URL}`}
                >
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

export default Tab;
