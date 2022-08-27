import { AxiosResponse } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import qs from 'qs';
import React from 'react';
import MainBackGround from '../../components/Background/MainBackground';
import BlogCategories from '../../components/Blogs/BlogCategories';
import Tab from '../../components/Blogs/BlogCategories/Tab';
import BlogLists from '../../components/Blogs/BlogLists';
import BlogSection from '../../components/Blogs/BlogSection/BlogSection';
import NavBar from '../../components/Header/Navbar';
import Pagination from '../../components/Paginations/Pagination';
import { fetchArticles, fetchCategories } from '../../http';
import {
  IQueryOptions,
  ICollectionResponse,
  IArticle,
  ICategory,
  IPagination,
} from '../../types';

interface IPropsTypes {
  categories: { items: ICategory[] };
  articles: { items: IArticle[]; pagination: IPagination };
}

const Blogs: NextPage<IPropsTypes> = ({ categories, articles }) => {
  const { page, pageCount } = articles.pagination;

  return (
    <>
      <Head>
        <title>Blog - VK</title>
        <meta name="description" content="On the way to learnin" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <main className="absolute z-0 top-0 left-0 w-screen h-screen bg-primary-black overflow-hidden">
        <MainBackGround />
        <section className="absolute top-0 left-0 w-screen h-screen">
          <NavBar />
          <div className="flex items-center justify-center">
            <Tab categories={categories.items} />
            <BlogSection articles={articles} categories={categories} />
            <Pagination page={page} pageCount={pageCount} />
          </div>
          <BlogCategories />
          <BlogLists />
        </section>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // Options Parameters
  const options: IQueryOptions = {
    populate: ['Featured_Image', 'author.avatar'],
    sort: ['id:desc'],
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 10,
    },
  };

  if (query.search) {
    options.filters = {
      Title: { $containsi: query.search },
    };
  }
  const querString = qs.stringify(options);

  // Articles Fetching
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(querString);

  // console.log(JSON.stringify(articles));

  // Category Fetching
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();

  return {
    props: {
      categories: {
        items: categories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};

export default Blogs;
