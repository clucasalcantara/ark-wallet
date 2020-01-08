/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react'
import {
  Alert,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
// Redux
import {connect} from 'react-redux'
// Navigation
import {withNavigation} from 'react-navigation'
// Styled components
import styled from '@emotion/native'
// Assets
import ArkLogo from '../assets/ark_logo.png'
// Services
import {getWallet} from '../data-management/actions/wallet'

const Wrapper = styled.View({
  height: Dimensions.get('window').height,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
})

const ImportButton = styled.TouchableOpacity({
  backgroundColor: 'red',
  width: 250,
  height: 50,
  borderRadius: 5,
  justifyContent: 'center',
})

const AddButton = styled.TouchableOpacity({
  backgroundColor: 'red',
  width: 250,
  height: 50,
  borderRadius: 5,
  justifyContent: 'center',
  marginTop: 210,
})

const CloseButton = styled.TouchableOpacity({
  backgroundColor: 'red',
  width: 40,
  height: 40,
  borderRadius: 5,
  justifyContent: 'center',
  alignSelf: 'flex-end',
  marginBottom: 10,
})

const ImportText = styled.Text({
  fontSize: 16,
  textAlign: 'center',
  color: 'white',
})

const Label = styled.Text({
  fontSize: 16,
  textAlign: 'center',
})

const CloseText = styled.Text({
  fontSize: 18,
  textAlign: 'center',
  color: 'white',
})

const Header = styled.View({
  height: 160,
  justifyContent: 'space-between',
  alignItems: 'center',
})

const Logo = styled.Image({
  width: 120,
  height: 120,
})

const ImportWrapper = styled.View({
  height: 60,
  display: 'flex',
  justifyContent: 'space-between',
})

const HeaderText = styled.Text({
  fontSize: 18,
  color: 'gray',
})

const DrawerButton = styled.Text({
  color: 'gray',
})

const ModalWrapper = styled.KeyboardAvoidingView({
  flex: 1,
  justifyContent: 'center',
  padding: 20,
  backgroundColor: 'black',
  opacity: 0.9,
})

const ImportModal = styled.View({
  height: 300,
  backgroundColor: 'white',
  alignItems: 'center',
})

const InputWrapper = styled.TextInput({
  height: 40,
  width: 250,
  borderColor: 'gray',
  borderWidth: 1,
})

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const Welcome = ({getWalletData, data, loading, navigation}) => {
  const [modalVisible, setModalVisble] = useState(false)
  const [walletAdrress, setWalletAddress] = useState(null)

  const fetchWallet = async () => {
    await getWalletData(walletAdrress)

    setModalVisble(false)

    if (data.wallets.length) {
      navigation.navigate('ListWallets')
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Modal animationType="fade" visible={modalVisible} transparent>
        <DismissKeyboard>
          <ModalWrapper behavior="padding">
            <CloseButton onPress={() => setModalVisble(false)}>
              <CloseText>X</CloseText>
            </CloseButton>
            <ImportModal>
              <ImportWrapper>
                <Label>Wallet Address</Label>
                {loading && <ActivityIndicator />}
                {!loading && (
                  <>
                    <InputWrapper
                      onChangeText={text => setWalletAddress(text)}
                      value={'AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv'}
                    />
                    <AddButton onPress={() => fetchWallet()}>
                      <ImportText>Add Wallet</ImportText>
                    </AddButton>
                  </>
                )}
              </ImportWrapper>
            </ImportModal>
          </ModalWrapper>
        </DismissKeyboard>
      </Modal>
      <SafeAreaView>
        <Wrapper>
          <Header>
            <HeaderText>ARK Mobile Wallet</HeaderText>
            <Logo source={ArkLogo} />
          </Header>
          <ImportWrapper>
            <ImportButton onPress={() => setModalVisble(true)}>
              <ImportText>Import Wallet</ImportText>
            </ImportButton>
          </ImportWrapper>
        </Wrapper>
      </SafeAreaView>
    </>
  )
}

Welcome.navigationOptions = {
  headerShown: false,
}

const mapStateToProps = ({data, loading, error}) => ({
  data,
  error,
  loading,
})

const mapDispatchToProps = {
  getWalletData: getWallet,
}

export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(Welcome),
)
