import type { Categories } from './categories';

export interface Post {
  title: string;
  excerpt?: string;
  createdAt?: string;
  slug: string;
  author?: Author;
  categories?: Categories[];
  featuredImage: Photo
}

export type Author = {
  description: string;
  id: string;
  name: string;
  photo: Photo;
}

export type Photo = {
  url: string
}
