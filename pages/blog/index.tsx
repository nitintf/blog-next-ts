import { VStack } from '@chakra-ui/react'
import { InferGetStaticPropsType } from 'next/types'

import Latest from 'components/Latest'
import { Layout } from 'components/UI/Layout'
import { getPosts } from 'graphql/querys/getPosts'

export async function getStaticProps () {
  const posts = await getPosts()

  return {
    props: {
      posts
    }
  }
}

export default function BlogPage ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <VStack as='main'>
        <Latest posts={posts} />
      </VStack>
    </Layout>
  )
}
