import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: #222;
`

export const Header = styled.View`
  margin-bottom: 8px;
`

export const Image = styled.Image`
  width: 100%;
`

export const HeaderContent = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 5%;
`

export const Title = styled.Text`
  font-size: 26px;
  font-family: Anton_400Regular;
  color: #FFF;
  margin-right: 10px;
`

export const Separator = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #999;
  margin-right: 10px;
`

export const Genre = styled.Text`
  font-size: 26px;
  font-family: Anton_400Regular;
  color: #999;
`

export const ButtonSearch = styled(RectButton)`
  position: absolute;
  right: 0;
  align-self: center;
`

export const Line = styled.View`
  border-bottom-color: #B8B8B8;
  border-bottom-width: 2px;
`

export const Products = styled.ScrollView`
  margin: 5%;
`

export const Shoes = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`
