import React from 'react'
import { Box, Flex, Grid, GridItem, Heading, Tag, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Post } from 'graphql/schema'

interface LatestProps {
  posts: Post[]
}

const Latest: React.FC<LatestProps> = ({ posts }) => {
  // console.log('posts', posts)
  return (
    <VStack width='full' alignItems='flex-start' paddingY='5rem'>
      <Heading as='h2' size='xl' marginBottom='2rem'>Latest Blogs</Heading>
      <Grid templateColumns='repeat(3, 1fr)' gap='2rem' rowGap='4rem'>
        {posts.map(post => (
          <GridItem w='100%' key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <Box cursor='pointer' width='100%' position='relative' height='200px' marginBottom='1rem' overflow='hidden'>
                <motion.div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '200px'
                  }}
                  whileHover={{ scale: 1.4 }}
                  transition={{ ease: [0.165, 0.84, 0.44, 1], duration: 1 }}
                >
                  <Image src={post.coverImage.url} alt={post.title} layout='fill' />
                </motion.div>
              </Box>
            </Link>
            <Tag variant='solid' colorScheme='purple' size='sm' marginBottom='1rem'>{post.category}</Tag>
            <Link href={`/blog/${post.slug}`}>
              <Heading cursor='pointer' as='h1' size='md' marginBottom='1rem'>{post.title}</Heading>
            </Link>
            <Flex alignItems='center' justifyContent='space-between' fontWeight={500} fontSize='sm' borderTopWidth='1px' paddingTop='1rem'>
              <Link href={`/blog/${post.slug}`}>
                <Text cursor='pointer'>Read Article</Text>
              </Link>
              <svg xmlns='http://www.w3.org/2000/svg' width='25px' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
              </svg>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  )
}

export default Latest
