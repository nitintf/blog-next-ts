import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react'

export function Container ({ children, ...rest }: ContainerProps) {
  return (
    <ChakraContainer
      maxW='6xl'
      paddingX={8}
      {...rest}
      position='relative'
      top={0}
    >
      {children}
    </ChakraContainer>
  )
}
