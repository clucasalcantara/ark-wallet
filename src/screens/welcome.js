/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
// Styled components
import styled from '@emotion/native'
// UI Elements
import Header from '../components/atoms/header'

const Wrapper = styled.View({
  height: Dimensions.get('window').height,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
})

const LoadingText = styled.Text({
  color: 'gray',
})

const Logo = styled.Image({
  width: 120,
  height: 120,
})

const LoadingInfo = styled.View({
  height: 60,
  display: 'flex',
  justifyContent: 'space-between',
})

const Welcome = ({ navigation, data }) => {
  setTimeout(
    () =>
      data.wallets.length
        ? navigation.navigate('ListWallets')
        : navigation.navigate('Home'),
    1000,
  )

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Wrapper>
          <Header title="Welcome to ARK Wallet" showLogo />
          <LoadingInfo>
            <ActivityIndicator />
            <LoadingText>Loading...</LoadingText>
          </LoadingInfo>
        </Wrapper>
      </SafeAreaView>
    </>
  )
}

Welcome.navigationOptions = {
  headerShown: false,
}

const mapStateToProps = ({ data }) => ({
  data,
})

export default withNavigation(connect(mapStateToProps)(Welcome))
