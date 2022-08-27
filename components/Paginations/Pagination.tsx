import { useRouter } from 'next/router';
import QueryString from 'qs';
import React from 'react';
import { TDirection } from '../../types';

interface IPropsTypes {
  page: number;
  pageCount: number;
  redirectUrl?: string;
}

const Pagination = ({ page, pageCount, redirectUrl = '/' }: IPropsTypes) => {
  const router = useRouter();

  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };

  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };

  const handlePaginate = async (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) {
      return '';
    }

    if (direction === -1 && isPrevDisabled()) {
      return '';
    }

    const querString = QueryString.stringify({
      ...router.query,
      page: page + direction,
    });

    router.push(`${redirectUrl}?${querString}`);
  };
  return (
    <div className="flex justify-center mt-16 ">
      <button
        onClick={() => handlePaginate(-1)}
        className={`${'bg-primary-green-1 py-2 px-4 text-primary-black w-24 rounded-full hover:scale-110 transition-all ease-in-out mr-6'} ${
          isPrevDisabled() ? ' disabled' : ' '
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className={`${'bg-primary-green-1 py-2 px-4 text-primary-black w-24 rounded-full hover:scale-110 transition-all ease-in-out mr-6'} ${
          isNextDisabled() ? ' disabled' : ' '
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
