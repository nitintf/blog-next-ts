import type { CategoriesT } from './categories';

export interface PostT {
  title: string;
  excerpt?: string;
  createdAt?: string;
  slug: string;
  author: AuthorT;
  categories?: CategoriesT[];
  featuredImage: PhotoT;
  content?: any
}

export type AuthorT = {
  description: string;
  id: string;
  name: string;
  photo: PhotoT;
}

export type PhotoT = {
  url: string
}
