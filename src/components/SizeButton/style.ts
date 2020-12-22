import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

interface IContainerProps {
  active?: boolean
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: .8
})<IContainerProps>`
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  margin: 0 10px;
  background-color: ${({ active }) => active ? '#666' : '#333'};
  border-color: #E6E6E6;
  border-width: 3px;
  border-radius: 4px;
`

export const Size = styled.Text`
  font-size: 18px;
  color: #FFF;
`
