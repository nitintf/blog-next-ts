import { gql, request } from 'graphql-request';
import type { Categories } from './../lib/types/categories';

const GraphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              name
              id
              photo {
                url
              }
              description
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }`

  const results = await request(GraphqlAPI, query)

  return results.postsConnection.edges;
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug 
      }
    }
  `

  const result = await request(GraphqlAPI, query);

  return result.posts
}

export const getSimilarPosts = async(categories: Categories, slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String]) {
      posts(
        where: {slug_not: $slug, AND: {
          categories_some: {
            slug_in: $categories
          }
        }}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug 
      }
    }
  `

  const result = await request(GraphqlAPI, query);

  return result.posts
}
