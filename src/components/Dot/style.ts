import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

interface IContainerProps {
  color: string
}

export const Container = styled.View<IContainerProps>`
  width: ${ Dimensions.get('window').width * 0.050 };
  height: ${ Dimensions.get('window').width * 0.050 };
  margin: 0 2.5%;
  background-color: ${({ color }) => color ? color : ''};
  border-radius: ${ (Dimensions.get('window').width * 0.050) / 2 };
  elevation: 5px;
`
