import { gql } from 'graphql-request'

import { graphQlClient } from 'config/graphQlClient'
import { BLOG_FRAGMENT } from 'graphql/fragments/blogFragment'
import { Post } from 'graphql/schema'

const GET_POSTS_QUERY = gql`
  ${BLOG_FRAGMENT}
  query GetBlogPosts {
    blogPosts (orderBy: publishedAt_DESC) {
      ...BlogPostFields
    }
  }
`

export const getPosts = async () => {
  const { blogPosts } = await graphQlClient.request(GET_POSTS_QUERY)
  return blogPosts as Array<Post>
}
