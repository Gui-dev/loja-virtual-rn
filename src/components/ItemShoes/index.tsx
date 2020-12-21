import React from 'react'

import { filterTitleShoes } from './../../utils/filterTitleShoes'
import { Container, Image, Title, Price } from './style'

interface IItemProps {
  title: string
  img: string
  cost: string
  onClick: () => void
}

export const ItemShoes: React.FC<IItemProps> = ({ title, img, cost, onClick }) => {

  const handlePageDetails = () => {
    onClick()
  }

  return (
    <Container onPress={ handlePageDetails }>
      <Image source={ img }/>
      {/* <Image source={{ uri: img }}/> */}
      <Title>{ filterTitleShoes(title) }</Title>
      <Price>R$ { cost }</Price>
    </Container>
  )
}
