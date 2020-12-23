import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  margin: 5% 0;
  background-color: blueviolet;
  border-radius: 4px;
`

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #FFF;
`

