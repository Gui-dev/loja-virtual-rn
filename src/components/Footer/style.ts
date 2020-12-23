import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 2%;
`

export const Title = styled.Text`
  font-size: 24px;
  font-family: Anton_400Regular;
  color: #FFF;
  padding: 0 2%;
  margin-left: 20px;
`

export const OptionsShoes = styled.View`
  flex-direction: row;
  width: 100%;
`

export const CarouselShoes = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  width: 100%;
`

export const CarouselShoesContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin: 0 10px;
`
