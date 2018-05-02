import { StackNavigator } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

export const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#B71129',
        elevation: 0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
)
