import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import tennis1 from './../../assets/detail.png'
import { Dot } from '../../components/Dot'
import { Container, Image, ContainerProduct, 
  ContainerPrice, Price, ContainerTitle, Title, DotContainer } from './style'

export const Details: React.FC = () => {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Detalhes'
    })
  }, [navigation])

  return (
    <Container>
      <Image source={ tennis1 } resizeMode="cover"/>

      <ContainerProduct>
        <ContainerPrice>
          <Price>R$ 280,90</Price>
        </ContainerPrice>
        <ContainerTitle>
          <Title>Nike Air Max</Title>
        </ContainerTitle>

        <DotContainer>
          <Dot color="#2379F4"/>
          <Dot color="#FB6E53"/>
          <Dot color="#DDD"/>
          <Dot color="#000"/>
        </DotContainer>
      </ContainerProduct>
    </Container>
  )
}
