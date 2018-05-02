import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

export default class NewsCard extends React.Component {
  render () {
    return (
      <View style={s.card}>
        <View style={s.info}>
          <Text style={s.type}>{this.props.type}</Text>
          <Text style={s.date}>{this.props.date}</Text>
          <View style={s.author}>
            <Image 
              style={s.authorImg}
              source={{uri: this.props.author.img}}
            />
            <Text style={s.authorName}>{this.props.author.name}</Text>
          </View>
        </View>
        <View 
          style={
            this.props.style === 'big' 
              ? s.big
              : s.small
          }
        >
          <View style={this.props.style === 'big' ? s.content : s.smallContent}>
            <Text style={s.title}>{this.props.title}</Text>
            <Text style={s.description}>
              {this.props.description}
            </Text>
          </View>
          <Image
            style={this.props.style === 'big' ? s.img : s.smallImg}
            source={{uri: this.props.img}}
            resizeMode='cover'
          />
        </View>
      </View>
    )
  }
}

const s = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderBottomWidth: 8,
    borderBottomColor: '#eee',
    paddingTop: 15,
    paddingBottom: 15
  },
  info: {
    marginBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center'
  },
  date: {
    fontSize: 14,
    color: '#999',
    marginRight: 10
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImg: {
    width: 20,
    height: 20,
    borderRadius: 100
  },
  authorName: {
    fontSize: 14,
    color: '#999',
    marginLeft: 10
  },
  type: {
    borderWidth: 0.5,
    borderColor: 'rgba(56, 162, 76, 0.6)',
    borderRadius: 1,
    color: 'rgb(56, 162, 76)',
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 2,
    paddingBottom: 2,
    marginRight: 10
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  smallContent: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 17
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    lineHeight: 23
  },
  img: {
    flex: 1,
    width: '100%',
    height: 280,
    marginTop: 20
  },
  big: {
    flex: 1
  },
  small: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    paddingRight: 20
  },
  smallImg: {
    width: 60,
    height: 60,
    borderRadius: 1,
    marginTop: 5
  }
})
