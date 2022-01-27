import { gql } from 'graphql-request'

export const BLOG_FRAGMENT = gql`
  fragment BlogPostFields on BlogPost {
    id
    title
    slug
    excerpt
    content
    coverImage {
      id
      url
      height
      width
    }
    authors {
      id
      name
      role
      photo {
        id
        url
      }
    }
    category
    published
  }
`
