import React from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View, ScrollView, ListView } from 'react-native'
import { TabNavigator } from 'react-navigation'
import NewsCard from '../components/NewsCard'
import Slider from '../components/Slider'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

@connect(state => ({
  news: state.News.data
}))
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Новости',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Live"
        color="#B71129"
        backgroundColor="#B71129"
      />
    ),
  }

  render() {
    const news = this.props.news
      .filter(item => !item.slider)
      .map(item => <NewsCard key={item.id} { ...item }/>)
    return (
      <ScrollView>
        <Slider/>
        {news}
      </ScrollView>
    )
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Видео',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Live"
        color="#fff"
        backgroundColor="rgba(52, 52, 52, 0.1)"
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider/>
      </View>
    );
  }
}

export default TabNavigator({
  Новости: { screen: HomeScreen },
  Видео: { screen: SettingsScreen }
}, {
  animationEnabled: true,
  tabBarOptions: {
    tinColor: '#B71129',
    activeTintColor: '#fff',
    inactiveTintColor: '#fff',
    scrollEnabled: true,
    indicatorStyle: {
      backgroundColor: '#fff'
    },
    style: {
      backgroundColor: '#B71129',
    },
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 15,
    },
  },
})
