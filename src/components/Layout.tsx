import * as React from 'react'
import { Container } from '@chakra-ui/react'

interface ContainerProps {
  children: React.ReactNode
}

function Layout({ children }: ContainerProps) {
  return <Container maxW='container.sm'>{children}</Container>
}

export default Layout
