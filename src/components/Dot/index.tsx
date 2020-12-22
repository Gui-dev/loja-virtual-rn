import React from 'react'
import { Text } from 'react-native'

import { Container } from './style'

interface IDotProps {
  color: string
}

export const Dot: React.FC<IDotProps> = ({ color }) => {
  return (
    <Container color={ color }>
    </Container>
  )
}
