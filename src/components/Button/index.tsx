import React from 'react'

import { Container, ButtonContainer, ButtonText } from './style'

interface IButtonProps {
  title: string
}

export const Button: React.FC<IButtonProps> = ({ title }) => {
  return (
    <Container>
      <ButtonContainer>
        <ButtonText>{ title }</ButtonText>
      </ButtonContainer>
    </Container>
  )
}
