import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

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
    return (
      <View style={styles.container}>
        <Text>Привет, Халум!</Text>
        <Button 
          title="Go to Details" 
          onPress={() => this.props.navigation.navigate('Details', )}
        />
      </View>
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
  tabBarOptions: {
    tinColor: '#B71129',
    activeTintColor: '#fff',
    inactiveTintColor: '#fff',
    indicatorStyle: {
      backgroundColor: '#fff'
    },
    style: {
      backgroundColor: '#B71129',
      shadowOpacity: 1,
      shadowOffset: {
        height: 5,
      },
      shadowRadius: 10
    },
    labelStyle: {
      fontWeight: 'bold',
    }
  },
})
