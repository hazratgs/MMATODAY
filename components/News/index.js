import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import NewsCard from '../NewsCard'
import { View } from 'react-native'

@connect(state => ({
  news: state.News.data
}))
export default class News extends PureComponent {
  render() {
    const news = this.props.news
      .filter(item => !item.slider)
      .map(item => <NewsCard key={item.id} { ...item }/>)

    return (
      <View>
        {news}
      </View>
    )
  }
}
