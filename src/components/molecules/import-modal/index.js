import React, { useState } from 'react'
import { ActivityIndicator, Alert, Dimensions } from 'react-native'
import styled from '@emotion/native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { array, bool, func, string, oneOfType, shape, object } from 'prop-types'
// UI Elements
import Modal from '../modal'
import Button from '../../atoms/button'
// Services
import { getWallet, cleanErrors } from '../../../data-management/actions/wallet'

const Label = styled.Text({
  marginTop: 20,
  marginBottom: 20,
  fontSize: 16,
  textAlign: 'center',
})

const StyledSwitch = styled.Switch({
  margin: 5,
})

const Container = styled.View({
  width: Dimensions.get('screen').width,
  flex: 1,
  padding: 20,
  justifyContent: 'space-between',
  alignItems: 'center',
})

const InputContainer = styled.View({
  width: Dimensions.get('screen').width,
  padding: 40,
  height: 40,
  marginBottom: 80,
})

const SwitchContainer = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const InputWrapper = styled.TextInput({
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
})

const StyledText = styled.Text({
  fontSize: 14,
})

const ImportForm = ({
  getWalletData,
  data: { wallets, error },
  navigation,
  isVisible,
  handleVisibility,
  isLoading,
}) => {
  const [walletAdrress, setWalletAddress] = useState(null)
  const [useAddressField, setAddressFieldUsage] = useState(true)

  const fetchAndNavigate = async () => {
    if (!walletAdrress) {
      return Alert.alert(
        'Attention',
        `You should insert an address or public key`,
        [
          {
            text: 'OK',
          },
        ],
      )
    }

    if (!error) {
      setWalletAddress(null)
      await getWalletData(walletAdrress, useAddressField)

      handleVisibility(false)

      return navigation.navigate('WalletList')
    }

    Alert.alert(
      'Attention',
      `An errour occourred while importing your wallet, retry?`,
      [
        {
          text: 'Confirm',
          onPress: () => fetchAndNavigate(),
        },
        {
          text: 'Cancel',
          onPress: () => {
            handleVisibility(false)
            setWalletAddress(null)
            cleanErrors()
          },
        },
      ],
    )
  }

  const fetchWallet = async () => {
    const alreadyExists = wallets.find(
      ({ address }) => address === walletAdrress,
    )
    if (alreadyExists) {
      return Alert.alert(
        'Attention',
        `Wallet already imported, updating instead`,
        [
          {
            text: 'OK',
            onPress: () => fetchAndNavigate(),
          },
        ],
      )
    }

    return fetchAndNavigate()
  }

  return (
    <Modal isClosed={isVisible} closeAction={handleVisibility}>
      <Container>
        <Label>Wallet Identifier</Label>
        {isLoading && <ActivityIndicator />}
        {!isLoading && (
          <Container
            accessible
            accessibilityLabel="Wallet import form"
            accessibilityHint="Adds a wallet">
            <SwitchContainer
              accessible
              accessibilityLabel="Wallet import methods"
              accessibilityHint="Choose a way to import, by address or public key"
              accessibilityRole="button">
              <StyledText>Import by Public Key</StyledText>
              <StyledSwitch
                onValueChange={() => setAddressFieldUsage(!useAddressField)}
                value={useAddressField}
              />
              <StyledText>Import by Address</StyledText>
            </SwitchContainer>
            <InputContainer
              accessible
              accessibilityLabel="Insert your wallet identificator here"
              accessibilityActions={[{ name: 'paste', label: 'paste' }]}
              onAccessibilityAction={event => {
                switch (event.nativeEvent.actionName) {
                  case 'paste':
                    Alert.alert('Alert', 'Paste action success')
                    break
                }
              }}>
              <InputWrapper
                accessible
                accessibilityLabel="Wallet input"
                accessibilityHint="Put your wallet identificator here"
                onChangeText={text => setWalletAddress(text)}
                value={walletAdrress}
              />
            </InputContainer>
            <Button handlePress={() => fetchWallet()} label="Add Wallet" />
          </Container>
        )}
      </Container>
    </Modal>
  )
}

const mapStateToProps = ({ data }) => ({
  data,
})

const mapDispatchToProps = {
  getWalletData: getWallet,
  cleanErrors,
}

ImportForm.propTypes = {
  getWalletData: func.isRequired,
  data: shape({
    wallets: array,
    error: oneOfType([string, bool]),
  }),
  navigation: object.isRequired,
  isVisible: bool.isRequired,
  handleVisibility: func.isRequired,
  isLoading: bool,
}

ImportForm.defaultProps = {
  isLoading: true,
}

export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(ImportForm),
)
