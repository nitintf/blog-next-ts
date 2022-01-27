import { gql } from 'graphql-request'

import { graphQlClient } from 'config/graphQlClient'
import { Post } from 'graphql/schema'

const GET_SLUG_QUERY = gql`
  query GetBlogPosts {
     blogPosts () {
      slug
    }
  }
`

export const getSlugs = async () => {
  const { blogPosts } = await graphQlClient.request(GET_SLUG_QUERY)
  return blogPosts as Array<Partial<Post>>
}
