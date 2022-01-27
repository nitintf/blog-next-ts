import React from 'react'
import { Avatar, AvatarGroup, Box, Heading, HStack, useColorModeValue, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Post } from 'graphql/schema'

interface FeaturedProps {
  post: Post
}

const Featured: React.FC<FeaturedProps> = ({ post }) => {
  const featured = useColorModeValue('blackAlpha.600', 'whiteAlpha')

  return (
    <VStack marginBottom='3rem' as='section' paddingTop='5rem' width='full' alignItems='flex-start'>
      <HStack width='100%' alignItems='flex-start'>
        <Link href={`/blog/${post.slug}`} passHref>
          <Box as='figure' width='80%' height={350} position='relative' overflow='hidden' cursor='pointer'>
            <motion.div
              style={{
                position: 'relative',
                width: '100%',
                height: '350px'
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: [0.165, 0.84, 0.44, 1], duration: 2 }}
            >
              <Image src={post.coverImage.url} alt={post.title} layout='fill' />
            </motion.div>
          </Box>
        </Link>
        <VStack paddingLeft='2rem' alignItems='flex-start'>
          <HStack marginBottom='1rem'>
            <Heading as='h4' size='xs' color='rebeccapurple' fontWeight='900'>FEATURED </Heading>
            <Heading as='span' size='xs' color={featured} fontWeight='500'>Published on {post.published}</Heading>
          </HStack>
          <Heading as='h1' size='2xl'>{post.title}</Heading>
          <Box as='p' paddingTop='1rem'>{post.excerpt}</Box>

          <AvatarGroup max={2} paddingTop='1rem'>
            {post.authors.map((author) => (
              <Avatar size='md' name={author.name} key={author.id} src={author.photo.url} />
            ))}
          </AvatarGroup>

          <Link href={`/blog/${post.slug}`} passHref>
            <Heading as='button' size='sm' color='rebeccapurple' fontWeight='500' paddingTop='1rem'>Read More</Heading>
          </Link>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default Featured
