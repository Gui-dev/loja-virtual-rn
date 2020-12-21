import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: .8
})` 
  align-items: center;
  justify-content: center;
  /* margin: 5%; */
  padding: 2%;
`

export const Image = styled.Image`
  width: 140px;
  height: 140px;
`

export const Title = styled.Text`
  font-size: 16px;
  color: #666;
`

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #CCC;
`
