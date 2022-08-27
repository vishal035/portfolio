import React from 'react';
('next');
// import Head from 'next/head';
import ArticleList from '../Articles/ArticleList';
import { IArticle, ICategory, IPagination } from '../../../types';

// import { useRouter } from 'next/router';

interface IPropsTypes {
  categories: { items: ICategory[] };
  articles: { items: IArticle[]; pagination: IPagination };
}

const BlogSection = ({ categories, articles }: IPropsTypes) => {
  return (
    <div>
      {/* <Tab categories={categories.items} /> */}
      {/* Articles */}
      <ArticleList articles={articles.items} />
      {/* <Pagination page={page} pageCount={pageCount} /> */}
    </div>
  );
};

export default BlogSection;
