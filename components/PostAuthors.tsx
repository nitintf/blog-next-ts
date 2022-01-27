import React from 'react'

import { Avatar, Box, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react'

import Link from 'next/link'

import { Author } from 'graphql/schema'

interface PostAuthorsProps {
  authors: Author[]
}

const PostAuthors: React.FC<PostAuthorsProps> = ({ authors }) => {
  return (
    <Box paddingY='6rem'>
      <Heading as='h2' size='md' marginBottom='3rem'>Article Contributor</Heading>
      <Grid templateColumns='repeat(4, 1fr)' gap='2rem' rowGap='4rem'>
        {authors.map(author => (
          <GridItem key={author.id}>
            <VStack alignItems='flex-start'>
              <Link href={`/author/${author.slug}`}>
                <Avatar cursor='pointer' size='xl' name={author.name} src={author.photo.url} marginBottom='1rem' />
              </Link>
              <Link href={`/author/${author.slug}`}>
                <Heading cursor='pointer' as='h4' size='sm'>{author.name}</Heading>
              </Link>
              <Heading as='p' fontWeight='400' size='xs'>{author.role}</Heading>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default PostAuthors
