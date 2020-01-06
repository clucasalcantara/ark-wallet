import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
// Screens
import {Home, Welcome} from '../screens'

const RootStack = createStackNavigator({
  Welcome,
  Home,
})

export default createAppContainer(RootStack)
