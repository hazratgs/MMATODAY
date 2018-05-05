import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slide from '../SlideItem'
import SliderDots from '../SliderDots'
import styled from 'styled-components'
import {
  ViewPagerAndroid,
  StyleSheet,
  Text,
  View
} from 'react-native'

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    height: 450
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
})

@connect(state => ({
  items: state.News.data
}))
export default class Slider extends Component {
  state = {
    activeSlide: 0
  }

  changeSlide = e => this.setState({ activeSlide: e.nativeEvent.position })

  render () {
    const data = this.props.items.filter(item => item.slider)
    const items = data.map(item => (
        <View key={item.id}>
          <Slide item={item}/>
        </View>
      ))

    return (
      <View>
        <ViewPagerAndroid
          initialPage={this.state.activeSlide}
          style={styles.viewPager}
          onPageSelected={this.changeSlide}
        >
          {items}
        </ViewPagerAndroid>
        <SliderDots items={data} active={this.state.activeSlide}/>
      </View>
    )
  }
}
