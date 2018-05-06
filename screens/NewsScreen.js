import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import HTML from 'react-native-render-html'
import styled from 'styled-components'
import { Dimensions } from 'react-native'

const Wrapper = styled.ScrollView`
  background-color: #fff;
`
const Content = styled.View`
  background-color: #fff;
`
const Header = styled.View`
  height: 375px;
  flex: 1;
`
const Overlay = styled.View`
  background: rgba(0,0,0,0.7);
  flex: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`
const HeaderWrapper = styled.View`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 0 20px 30px;
  height: 100%;
  z-index: 20;
`
const Image = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  height: 100%;
  width: 100%;
  z-index: 5;
`
const Title = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
`
const Type = styled.Text`
  font-size: 11px;
  color: rgb(173, 173, 173);
  margin-bottom: 23px;
  font-weight: 900;
  letter-spacing: 1px;
  opacity: .8;
`
const DateText = styled.Text`
  display: flex;
  color: rgba(255,255,255,.5);
  font-size: 12px;
  padding: 10px 0;
  font-weight: 300;
  font-family: Roboto;
`
const Description = styled.Text`
  font-size: 17px;
  line-height: 24px;
  padding: 20px;
`
const HtmlContent = styled.Text`
  padding: 20px;
`

const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

@connect(state => ({
  news: state.News.data
}))
export default class NewsScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    
    return {
      headerStyle: {
        backgroundColor: 'transparent'
      },
      headerTransparent: true
    }
  }

  render() {
    const { id } = this.props.navigation.state.params
    const [item] = this.props.news.filter(item => item.id === id)
    return (
      <Wrapper>
        <Header>
          <Image source={{uri: item.img}}/>
          <Overlay/>
          <HeaderWrapper>
            <Type>{item.type.toUpperCase()}</Type>
            <Title>{item.title}</Title>
            <DateText>{item.date}</DateText>
          </HeaderWrapper>
        </Header>
        <Content>
          <Description>{item.description}</Description>
          <HTML html={item.html}/>
        </Content>
      </Wrapper>
    )
  }
}
