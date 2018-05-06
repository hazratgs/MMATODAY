import { StackNavigator } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import NewsScreen from './screens/NewsScreen'

export const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen,
    },
    News: {
      screen: NewsScreen
    }
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'float',
    // headerTransitionPreset: 'uikit',
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
