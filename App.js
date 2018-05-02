import React from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import { RootStack } from './routes'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
