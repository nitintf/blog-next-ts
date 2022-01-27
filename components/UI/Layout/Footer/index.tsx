import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { Link, Flex, HStack, VStack, Heading } from '@chakra-ui/react'

import { Container } from '../Container'

const footerLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/nitinpanwar08',
    icon: AiFillGithub
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/nitin-panwar-0802/',
    icon: AiFillLinkedin
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/nitinpanwarrr',
    icon: AiFillTwitterCircle
  }
]

export function Footer () {
  return (
    <Flex
      width='full'
      marginTop='auto'
      direction='column'
      borderTopWidth={2}
    >
      <Container>
        <VStack
          as='footer'
          width='full'
          spacing={4}
          paddingY={8}
          alignItems='center'
          justifyContent='center'
        >
          <Heading
            size='xs'
            width='100%'
            maxWidth={420}
            textAlign='center'
          >
            Keep connected with my work by following me on
          </Heading>

          <HStack
            spacing={4}
            alignItems='flex-end'
            justifyContent='center'
          >
            {
              footerLinks.map(({
                name,
                href,
                icon: Icon
              }) => (
                <Link
                  key={href}
                  width={5}
                  height={5}
                  href={href}
                  position='relative'
                  isExternal
                  title={`Go to ${name}`}
                >
                  <Icon size={25} />
                </Link>
              ))
              }
          </HStack>
        </VStack>
      </Container>
    </Flex>
  )
}
