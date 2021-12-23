import { gql, request } from 'graphql-request';

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
export const getPostDetails = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      post(where: {slug: $slug}) {
        author {
          description
          name
          photo {
            url
          }
          id
        }
        content {
          raw
        }
        title
        slug
        createdAt
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
`

  const results = await request(GraphqlAPI, query, {slug})

  return results;
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

export const getSimilarPosts = async (categories: string[], slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
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
  `;
  const result = await request(GraphqlAPI, query, { slug, categories });
  
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        slug
      }
    }
  `

  const result = await request(GraphqlAPI, query);

  return result.categories
}
