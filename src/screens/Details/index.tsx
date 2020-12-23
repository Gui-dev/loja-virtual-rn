import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import tennis1 from './../../assets/detail.png'
import { Dot } from '../../components/Dot'
import { SizeButton } from '../../components/SizeButton'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Container, Image, ContainerProduct, 
  ContainerPrice, Price, ContainerTitle, Title, DotContainer, 
  ShoeSizeContainer, ShoeSize, DetailsShoes, Description, Category, Material, Line 
} from './style'

export const Details: React.FC = () => {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Nike Air Max'
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

        <ShoeSizeContainer>
          <ShoeSize>
            <SizeButton active sizeShoes="37"/>
            <SizeButton sizeShoes="38"/>
            <SizeButton sizeShoes="39"/>
            <SizeButton sizeShoes="42"/>
            <SizeButton sizeShoes="44"/>
          </ShoeSize>
        </ShoeSizeContainer>

        <DetailsShoes>

          <Title>Nike Air Max</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est, eligendi. Aut cupiditate nesciunt cum 
            cumque quia rem eos saepe sed excepturi 
            corrupti ipsam eius, nam magni libero quae a aliquam.
          </Description>
          <Category>
            - Categoria: Amortecimento
          </Category>
          <Material>
            - Material: mesh
          </Material>

        </DetailsShoes>

        <Button title="COMPRAR"/>


      </ContainerProduct>
      <Line />

      <Footer />
    </Container>
  )
}
