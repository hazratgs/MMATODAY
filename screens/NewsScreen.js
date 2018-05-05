import React, { PureComponent } from 'react'
import { Text, View, Button } from 'react-native'
import styled from 'styled-components'

const Content = styled.View`
  background-color: #fff;
`
const Title = styled.Text`
`

export default class NewsScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    
    return {

    }
  }

  render() {
    return (
      <Content>
        <Title>Hello, World!</Title>
      </Content>
    )
  }
}
