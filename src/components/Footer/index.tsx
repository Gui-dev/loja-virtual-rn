import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ItemShoes } from '../ItemShoes'

import tennis1 from './../../assets/1.png'
import tennis2 from './../../assets/2.png'
import tennis3 from './../../assets/3.png'
import tennis4 from './../../assets/4.png'

import { Container, Title, OptionsShoes, CarouselShoes, CarouselShoesContainer } from './style'

export const Footer: React.FC = () => {

  const { navigate } = useNavigation()

  const handleNavigationToPageDetails = () => {
    navigate('Details')
  }

  return (
    <Container>
      <Title>Você também pode gostar</Title>

      <OptionsShoes>
        <CarouselShoes>
          <CarouselShoesContainer>
            
            <ItemShoes 
              title="Nike Air Max"
              img={ tennis1 }
              cost="399,90"
              onClick={ handleNavigationToPageDetails }
            />
            <ItemShoes 
              title="Nike Air Max"
              img={ tennis2 }
              cost="399,90"
              onClick={ handleNavigationToPageDetails }
            />
            <ItemShoes 
              title="Nike Air Max"
              img={ tennis3 }
              cost="399,90"
              onClick={ handleNavigationToPageDetails }
            />
            <ItemShoes 
              title="Nike Air Max"
              img={ tennis4}
              cost="399,90"
              onClick={ handleNavigationToPageDetails }
            />

          </CarouselShoesContainer>
        </CarouselShoes>
      </OptionsShoes>
    </Container>
  )
}
