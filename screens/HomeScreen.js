import React from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native'
import { TabNavigator } from 'react-navigation'
import NewsCard from '../components/NewsCard'

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
        color="#fff"
        backgroundColor="rgba(52, 52, 52, 0.1)"
      />
    ),
  }

  render() {
    const news = this.props.news.map(item => <NewsCard key={item.id} { ...item }/>)
    return (
      <ScrollView>
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
        <Text>Settings!</Text>
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
      shadowOpacity: 0.2,
      shadowOffset: {
        height: 5,
      },
      shadowRadius: 10
    },
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 15,
    },
  },
})
