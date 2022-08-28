import React from 'react';
import { IArticle } from '../../../types';
import ErrorBoundary from '../../Errors/ErrorCather';
import BlogCardWithImage from '../BlogCard/BlogCardWithImage';
import BlogCardBase from '../BlogCard/BlogCardBase';

interface IPropsTypes {
  articles: IArticle[];
}

const ArticleList = ({ articles }: IPropsTypes) => {
  // console.log(articles);
  return (
    <>
      <div className="flex flex-col">
        <ErrorBoundary>
          {articles.length > 0 ? (
            articles.map((article) => (
              <BlogCardWithImage key={article.id} article={article} />
            ))
          ) : (
            <BlogCardBase />
          )}
        </ErrorBoundary>
      </div>
    </>
  );
};

export default ArticleList;
