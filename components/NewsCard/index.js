import React from 'react'
import styled from 'styled-components'

const CardView = styled.View`
  background-color: #fff;
  border-bottom-width: 8;
  border-bottom-color: #eee;
  padding-top: 15;
  padding-bottom: 15;
`
const InfoView = styled.View`
  margin-bottom: 8;
  padding-left: 15;
  padding-right: 15;
  flex: 1;
  flex-direction: row;
  align-items: center
`
const Time = styled.Text`
  font-size: 14;
  color: #999;
  margin-right: 10;
`
const Type = styled.Text`
  border-width: 0.5;
  border-color: rgba(56, 162, 76, 0.6);
  border-radius: 1;
  color: rgb(56, 162, 76);
  font-size: 12;
  font-weight: bold;
  padding-left: 6;
  padding-right: 6;
  padding-top: 2;
  padding-bottom: 2;
  margin-right: 10;
`
const Author = styled.View`
  flex-direction: row;
  align-items: center;
`
const AuthorImg = styled.Image`
  width: 20;
  height: 20;
  border-radius: 100;
`
const AuthorName = styled.Text`
  font-size: 14;
  color: #999;
  margin-left: 10;
`
const Content = styled.View`
  flex: 1;
  padding-left: 15;
  padding-right: ${props => props.type === 'big' ? 15 : 15};
`
const Title = styled.Text`
  font-size: 18;
  font-weight: 700;
  line-height: 24;
  margin-bottom: 6;
`
const Description = styled.Text`
  font-size: 16;
  line-height: 23;
`
const Images = styled.Image`
  width: ${props => props.type === 'big' ? '100%' : '60'};
  height: ${props => props.type === 'big' ? '280' : '60'};
  margin-top: ${props => props.type === 'big' ? '15' : '5'};
  border-radius: ${props => props.type === 'big' ? '0' : '1'};
`
const StyleContent = styled.View`
  flex: 1;
  display: flex;
  flex-direction: ${props => props.type === 'big' ? 'column' : 'row'};
  padding-right: ${props => props.type === 'big' ? '0' : '15'}
`

export default class NewsCard extends React.Component {
  render () {
    return (
      <CardView>
        <InfoView>
          <Type>{this.props.type}</Type>
          <Time>{this.props.date}</Time>
          <Author>
            <AuthorImg source={{uri: this.props.author.img}}/>
            <AuthorName>{this.props.author.name}</AuthorName>
          </Author>
        </InfoView>
        <StyleContent type={this.props.style}>
          <Content type={this.props.style}>
            <Title>{this.props.title}</Title>
            <Description>
              {this.props.description}
            </Description>
          </Content>
          <Images
          type={this.props.style}
            source={{uri: this.props.img}}
            resizeMode='cover'
          />
        </StyleContent>
      </CardView>
    )
  }
}
