import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
`
const Dots = styled.View`
  width: 8px;
  height: 8px;
  border: 1px solid #fff;
  border-radius: 100;
  margin: 0 6px;
  opacity: ${props => props.active ? 1 : 0.3}
  background-color: ${props => props.active ? '#fff' : 'transparent'}
`

export default class SliderDots extends Component {
  render() {
    const dots = this.props.items
      .map((item, i) => <Dots key={i} active={i === this.props.active}/>)
      
    return (
       <Wrapper>
        {dots}
       </Wrapper>
    )
  }
}
