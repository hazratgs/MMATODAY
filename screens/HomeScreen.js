import React from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Slider from '../components/Slider'
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
class HomeScreen extends React.PureComponent {
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

  state = {
    refreshing: false,
    firstSliderComponent: { id: 0, component: 'slider'}
  }

  _onRefresh = () => {
    this.setState({ refreshing: true })
    setTimeout(() => {
      this.setState({ refreshing: false })
    }, 1000);
  }

  _renderItem = ({ item }) => item.component ? <Slider/> : <NewsCard { ...item }/>

  _keyExtractor = item => `${item.id}`

  render () {
    const news = this.props.news.filter(item => !item.slider)
    return (
      <FlatList
        data={[ this.state.firstSliderComponent, ...news ]}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            colors={['#B71129']}
          />
        }
      />
    )
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Видео',
    headerRight: (
      <Button
        onPress={() => this.props.navigation.navigate('Details')}
        title="Live"
        color="#fff"
        backgroundColor="rgba(52, 52, 52, 0.1)"
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Details')}
          title="Live"
          color="#fff"
          backgroundColor="rgba(52, 52, 52, 0.1)"
        />
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
