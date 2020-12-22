import React from 'react'
import { Text } from 'react-native'

import { Container, Size } from './style'

interface ISizeButtonProps {
  active?: boolean
  sizeShoes: string
}

export const SizeButton: React.FC<ISizeButtonProps> = ({ active, sizeShoes }) => {

  return (
    <Container active={ active }>
      <Size>{ sizeShoes }</Size>
    </Container>
  )
}