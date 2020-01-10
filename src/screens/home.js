/**
 * @format
 * @flow
 */
import React, { useState } from 'react'
import { SafeAreaView, StatusBar, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import styled from '@emotion/native'
import { withNavigation } from 'react-navigation'
// UI Elements
import { ImportModal } from '../components/molecules'
import { Button, Header } from '../components/atoms'

const Wrapper = styled.View({
  height: Dimensions.get('window').height,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
})

const ImportWrapper = styled.View({
  display: 'flex',
})

const Home = ({ data: { wallets, loading }, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)

  if (wallets.length) {
    navigation.navigate('WalletList')
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImportModal
        isVisible={modalVisible}
        handleVisibility={setModalVisible}
        isLoading={loading}
      />
      <SafeAreaView>
        <Wrapper>
          <Header title="ARK Mobile Wallet" showLogo />
          <ImportWrapper>
            <Button
              handlePress={() => setModalVisible(true)}
              label="Import Wallet"
            />
          </ImportWrapper>
        </Wrapper>
      </SafeAreaView>
    </>
  )
}

Home.navigationOptions = {
  headerShown: false,
}

const mapStateToProps = ({ data }) => ({
  data,
})

export default connect(mapStateToProps, null)(withNavigation(Home))
