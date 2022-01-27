import { Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'

import { Container } from 'components/UI/Layout/Container'

export function Header () {
  return (
    <Flex
      as='header'
      top={0}
      width='full'
      zIndex='docked'
      position='sticky'
      direction='column'
      height='100px'
      backgroundColor='white'
    >
      <Container
        width='full'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        paddingY={8}
      >
        <Flex paddingBottom='1.5rem' justifyContent='space-between' width='full' alignItems='center' borderBottomWidth='1px'>
          <Link href='/'>
            <Heading fontFamily='Montserrat' fontWeight={800} as='h1' size='md' title='Click to go Home' cursor='pointer'>
              nextBlog
            </Heading>
          </Link>
          <Menu>
            <MenuButton
              _hover={{ bg: 'gray.200' }}
              _expanded={{ bg: 'gray.200' }}
              as={Button}
              rightIcon={<FiChevronDown />}
            >
              Filter By
            </MenuButton>
            <MenuList>
              <MenuItem>All</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

      </Container>
    </Flex>
  )
}
