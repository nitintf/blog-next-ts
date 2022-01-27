import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Image = {
  url: string
  id: string
  width?: string
  height?: string
}

export type Author = {
  name: string
  role: string
  id: string
  photo: Image
  slug: string
}

export type Content = {
  markdown: Content,
  mdx: MDXRemoteSerializeResult<Record<string, unknown>>
}

export type Post = {
  id: string
  title: string
  coverImage: Image
  slug: string
  excerpt: string
  published: string
  authors: Author[]
  content: Content
  category: string
  featuredPost: boolean
}
