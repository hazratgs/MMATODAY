import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.View`
  flex: 1;
  background-color: #000;
  position: relative;
`
const Image = styled.Image`
  height: 450;
`
const Wrapper = styled.View`
  flex: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  justifyContent: flex-end;
  padding: 0 20px 50px;
`
const Overlay = styled.View`
  background: rgba(0,0,0,0.5);
  flex: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`
const Title = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  max-width: 80%;
`
const DateText = styled.Text`
  display: flex;
  color: rgba(255,255,255,.5);
  font-size: 12px;
  padding: 10px 0;
  font-weight: 300;
  font-family: Roboto;
`

export default class SlideItem extends Component {
  render () {
    return (
      <Content>
        <Image source={{ uri: this.props.item.img }}/>
        <Overlay/>
        <Wrapper>
          <Title>{this.props.item.title}</Title>
          <DateText>{this.props.item.date}</DateText>
        </Wrapper>
      </Content>
    )
  }
}
