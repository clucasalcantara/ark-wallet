import React, { useState } from 'react'
import { ActivityIndicator, Alert, Text, Switch } from 'react-native'
import styled from '@emotion/native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
// UI Elements
import Modal from '../modal'
import Button from '../../atoms/button'
// Services
import { getWallet } from '../../../data-management/actions/wallet'

const Label = styled.Text({
  marginTop: 20,
  marginBottom: 20,
  fontSize: 16,
  textAlign: 'center',
})

const Container = styled.View({
  height: 250,
  justifyContent: 'space-between',
  alignItems: 'center',
})

const InputContainer = styled.View({
  height: 40,
  marginBottom: 40,
})

const SwitchContainer = styled.View({
  width: 350,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: 1,
})

const InputWrapper = styled.TextInput({
  height: 40,
  width: 300,
  borderColor: 'gray',
  borderWidth: 1,
})

const ImportForm = ({
  getWalletData,
  data: { wallets },
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

    await getWalletData(walletAdrress, useAddressField)

    handleVisibility(false)

    return navigation.navigate('ListWallets')
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
          <Container>
            <SwitchContainer>
              <Text>Import by Public Key</Text>
              <Switch
                onValueChange={() => setAddressFieldUsage(!useAddressField)}
                value={useAddressField}
              />
              <Text>Import by Address</Text>
            </SwitchContainer>
            <InputContainer>
              <InputWrapper
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

const mapStateToProps = ({ data, loading, error }) => ({
  data,
  error,
  loading,
})

const mapDispatchToProps = {
  getWalletData: getWallet,
}

export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(ImportForm),
)
