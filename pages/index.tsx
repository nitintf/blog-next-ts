import { VStack } from '@chakra-ui/react'
import { InferGetStaticPropsType } from 'next/types'

import { getLatestPosts } from 'graphql/querys/getLatestPosts'
import { getFeaturedPost } from 'graphql/querys/getFeaturedPost'
import Featured from 'components/Featured'
import Latest from 'components/Latest'
import { Layout } from 'components/UI/Layout'

export async function getStaticProps () {
  const posts = await getLatestPosts()
  const featuredPost = await getFeaturedPost()

  return {
    props: {
      posts,
      featuredPost
    }
  }
}

export default function HomePage ({ posts, featuredPost }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <VStack as='main'>
        <Featured post={featuredPost[0]} />
        <Latest posts={posts} />
      </VStack>
    </Layout>
  )
}
