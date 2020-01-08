import React from 'react'
import {TouchableOpacity, Text, Image} from 'react-native'
import drawerIcon from '../assets/drawer_button.png'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
// Screens
import {Home, Welcome, ListWallets} from '../screens'

const WalletsNavigator = createStackNavigator({
  ListWallets: {
    screen: ListWallets,
    navigationOptions: ({navigation}) => ({
      title: 'My Wallets',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={drawerIcon}
            style={{marginLeft: 10, height: 20, width: 20}}
          />
        </TouchableOpacity>
      ),
    }),
  },
})

const appNavigator = createDrawerNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: () => ({
      drawerIcon: () => null,
      drawerLabel: () => null,
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: () => ({
      drawerLabel: 'Import Wallet',
    }),
  },
  ListWallets: {
    screen: WalletsNavigator,
    navigationOptions: () => ({
      drawerLabel: 'My Wallets',
    }),
  },
})

export default createAppContainer(appNavigator)
