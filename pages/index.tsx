import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { getPosts } from '../services'
import type { Post } from '../lib/types'
import { PostCard, Categories, PostWidget } from '../components'

interface HomeProps {
  posts: Post[]
}

const Home: NextPage<HomeProps> = ({posts}) => {

  return (
    <div className='container mx-auto px-10 mb-8 '>
      <Head>
        <title>CMS Blog</title>
        <meta name="description" content="Blog created using NextJS, Typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='md:col-span-8 col-span-1'>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post}/>
          ))}
        </div>
        <div className='md:col-span-4 col-span-1'>
          <div className='md:sticky relative top-8'>
            <PostWidget />
            <Categories />
            </div>
        </div>

      </div>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const result = await getPosts()
  const posts = result.map((item: any) => item?.node)

  return {
    props: {
      posts
    }
  }
}


export default Home
