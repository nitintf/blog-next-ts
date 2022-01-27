import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Box, Flex, Heading, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'

import { getSlugs } from 'graphql/querys/getSlugs'
import { Container } from 'components/UI/Layout/Container'
import CloseButton from 'components/UI/CloseButton'
import PostAuthors from 'components/PostAuthors'
import { getPosts } from 'graphql/querys/getPosts'
import { parsePostData } from 'helpers/parsePostData'
import { Footer } from 'components/UI/Layout/Footer'

export const getStaticPaths = async () => {
  let paths = []
  const posts = await getSlugs()

  paths = [...posts.map(post => ({ params: { slug: post.slug } }))]

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allPosts = await getPosts()

  const currentPost = allPosts.filter(post => post.slug === context?.params.slug as string)
  const post = await parsePostData(currentPost[0])

  const postIndex = allPosts.findIndex(({ id }) => id === post.id)

  const nextPost = allPosts[postIndex + 1] || null
  const previousPost = allPosts[postIndex - 1] || null

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post,
      nextPost,
      previousPost
    },
    revalidate: 60
  }
}

const variant: Variants = {
  initial: {
    y: 100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: 100,
    opacity: 0
  }
}

const Blog = ({ post, previousPost, nextPost }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Container>
        <VStack alignItems='flex-start' paddingTop='3rem' width='90%'>
          <motion.div
            variants={variant}
            initial='initial'
            animate='animate'
            exit='initial'
            transition={{
              duration: 1,
              ease: [0.77, 0, 0.175, 1],
              staggerChildren: 1
            }}
          >
            <HStack justifyContent='center' width='full'>
              <Link href='/'>
                <IconButton
                  aria-label='Back to Home'
                  fontSize='35px'
                  size='lg'
                  icon={<CloseButton />}
                  isRound
                />
              </Link>
            </HStack>
            <HStack marginTop='4rem'>
              <Heading as='h4' size='xs' fontWeight={900}>BLOG</Heading>
              <Heading as='span' size='xs' fontWeight={400}>Published on {post.published}</Heading>
            </HStack>
            <Heading width='full' paddingY='2rem' as='h1' size='4xl' lineHeight={1.1}>
              {post.title}
            </Heading>
            <Box as='figure' width='100%' height={550} position='relative' overflow='hidden' cursor='pointer'>
              <Image src={post.coverImage.url} alt={post.title} layout='fill' />
            </Box>
            <Box fontWeight={400} fontStyle='italic' maxW='none' pt={10} pb={8} color='gray.500' className='prose'>
              <Text as='span'>Introduction : {post.excerpt}</Text>
            </Box>
            <Box maxW='none' as='article' fontWeight={500} pt={10} pb={8} paddingX={10} color='gray.500' className='prose'>
              <MDXRemote {...post.content.mdx} />
            </Box>
            <PostAuthors authors={post.authors} />
            <Box
              as='footer'
              fontSize='sm'
              fontWeight='medium'
              lineHeight='5'
              gridColumnStart={{ lg: '1' }}
              gridRowStart={{ lg: '2' }}
            >
              {(nextPost || previousPost) && (
                <Flex
                  py={8}
                  borderWidth='1px 0'
                  borderStyle='solid'
                  borderColor='gray.200'
                  spacing={8}
                  width='100%'
                >
                  {previousPost && (
                    <div style={{
                      marginRight: 'auto'
                    }}
                    >
                      <Heading
                        as='h2'
                        fontSize='xs'
                        fontWeight='medium'
                        letterSpacing='wide'
                        textTransform='uppercase'
                        lineHeight='4'
                        color='gray.500'
                      >
                        Previous Post
                      </Heading>
                      <Box
                        color='purple.500'
                        _hover={{
                          color: 'purple.900'
                        }}
                        fontSize='lg'
                      >
                        <Link href={`/blog/${previousPost.slug}`}>
                          <a>{previousPost.title}</a>
                        </Link>
                      </Box>
                    </div>
                  )}
                  {nextPost && (
                    <div style={{
                      marginLeft: 'auto'
                    }}
                    >
                      <Heading
                        as='h2'
                        fontSize='sm'
                        fontWeight='medium'
                        letterSpacing='wide'
                        textTransform='uppercase'
                        lineHeight='4'
                        color='gray.500'
                      >
                        Next Post
                      </Heading>
                      <Box
                        color='purple.500'
                        _hover={{
                          color: 'purple.400'
                        }}
                        fontSize='lg'
                      >
                        <Link href={`/blog/${nextPost.slug}`}>
                          <a>{nextPost.title}</a>
                        </Link>
                      </Box>
                    </div>
                  )}
                </Flex>
              )}
            </Box>
          </motion.div>
        </VStack>
      </Container>
      <Footer />
    </>
  )
}

export default Blog
