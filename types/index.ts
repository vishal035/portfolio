import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface ICategoryAttribute {
  Title: string;
  Title_URL: string;
  publishedAt: string;
}

export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

export interface IImageDataInterface {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        large: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path?: string;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        medium: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path?: string;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        small: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path?: string;
          width: number;
          height: number;
          size: number;
          url: string;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string;
      provider: string;
      provider_metadata?: string;
      createdAt: string;
      updatedAt: string;
    };
  }[];
}

export interface IArticleAttribute {
  Title: string;
  Body: string | MDXRemoteSerializeResult;
  Post_Title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Featured_Image: IImageDataInterface;
  category: {
    data: ICategory;
  };
  author: IAuthor;
  description: string;
}

export interface IArticle {
  id: number;
  attributes: IArticleAttribute;
}

export interface IAuthor {
  data: {
    attributes: {
      username: string;
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IResourceMeta {
  pagination: IPagination;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

export type TDirection = 1 | -1;

export interface IQueryOptions {
  populate: string[];
  sort: string[];
  pagination: {
    page: number;
    pageSize: number;
  };
  filters?: any;
}
