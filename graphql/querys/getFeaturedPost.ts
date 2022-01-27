import { gql } from 'graphql-request'

import { graphQlClient } from 'config/graphQlClient'
import { BLOG_FRAGMENT } from 'graphql/fragments/blogFragment'
import { Post } from 'graphql/schema'

const GET_FEATURED_POST = gql`
  ${BLOG_FRAGMENT}
  query GetBlogPosts {
    featuredPost: blogPosts (where: {
    featuredPost: true
  }) {
      ...BlogPostFields
    }
  }
`

export const getFeaturedPost = async () => {
  const { featuredPost } = await graphQlClient.request(GET_FEATURED_POST)
  return featuredPost as Post
}
