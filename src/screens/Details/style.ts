import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: #222;
`

export const Image = styled.Image`
  width: 100%;
  height: 250px;
`


export const ContainerProduct = styled.View`
  margin: 5%;
`

export const ContainerPrice = styled.View`
  
`

export const Price = styled.Text`
  font-size: 24px;
  font-family: Anton_400Regular;
  color: #FFF; 
  padding: 0 2%;
`

export const ContainerTitle = styled.View`
  opacity: 0.7;
`

export const Title = styled.Text`
  font-size: 30px;
  font-family: Anton_400Regular;
  color: #FFF;
  padding: 0 2%; 
`

export const DotContainer = styled.View`
  flex-direction: row;
  margin-top: 7%;
`

export const ShoeSizeContainer = styled.View`
  margin-top: 7%;
`

export const ShoeSize = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  flex-direction: row;
`

export const DetailsShoes = styled.View`
  padding: 2% 0;
  margin: 2% 0;
`

export const Description = styled.Text`
  font-size: 16px;
  line-height: 25px;
  color: #FFF;
  padding: 0 2%;
  margin: 0 2%;
`

export const Category = styled.Text`
  font-size: 16px;
  line-height: 25px;
  color: #FFF;
  margin-left: 30px;
`

export const Material = styled.Text`
  font-size: 16px;
  line-height: 25px;
  color: #FFF;
  margin-left: 30px;
`