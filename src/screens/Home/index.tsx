import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons as Icon } from '@expo/vector-icons'

import bannerImage from './../../assets/banner.png'
import tennis1 from './../../assets/1.png'
import tennis2 from './../../assets/2.png'
import tennis3 from './../../assets/3.png'
import tennis4 from './../../assets/4.png'
import { ItemShoes } from './../../components/ItemShoes'
import { Container, Header, Image, HeaderContent, Title, Separator, Genre, ButtonSearch,
 Line, Products, Shoes } from './style'

export const Home: React.FC = () => {

  const { navigate } = useNavigation()

  const handleNavigationToPageDetails = () => {
    navigate('Details')
  }

  return (
    <Container>
      <Header>
        <Image source={ bannerImage }/>

        <HeaderContent>
          <Title>TÊNIS</Title>
          <Separator>-</Separator>
          <Genre>MASCULINO</Genre>
          <ButtonSearch onPress={ () => {} }>
            <Icon name="filter-list" size={ 24 } color="#FFF"/>
          </ButtonSearch>
        </HeaderContent>

      </Header>

      <Line />

      <Products>
        <Title>LANÇAMENTOS</Title>

        <Shoes>
          <ItemShoes 
            title="Nike Air Max"
            img={ tennis1 }
            cost="199,90"
            onClick={ handleNavigationToPageDetails }
          />
          <ItemShoes 
            title="Nike Air Max"
            img={ tennis2 }
            cost="599,90"
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
            img={ tennis4 }
            cost="499,90"
            onClick={ handleNavigationToPageDetails }
          />
        </Shoes>
      </Products>
    </Container>
  )
}
