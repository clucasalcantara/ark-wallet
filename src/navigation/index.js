import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import drawerIcon from '../assets/drawer_button.png'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
// Screens
import { Home, Welcome, WalletList } from '../screens'

const WalletsNavigator = createStackNavigator({
  WalletList: {
    screen: WalletList,
    navigationOptions: ({ navigation }) => ({
      title: 'My Wallets',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={drawerIcon}
            style={{ marginLeft: 10, height: 20, width: 20 }}
          />
        </TouchableOpacity>
      ),
    }),
  },
})

const appNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      drawerLabel: 'Home',
    }),
  },
  WalletList: {
    screen: WalletsNavigator,
    navigationOptions: () => ({
      drawerLabel: 'My Wallets',
    }),
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: () => ({
      drawerIcon: () => null,
      drawerLabel: () => null,
    }),
  },
})

export default createAppContainer(appNavigator)
