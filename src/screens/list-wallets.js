/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {useEffect, useState} from 'react'
import {SafeAreaView, StatusBar, ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'
import {withNavigation} from 'react-navigation'
// Styled components
import styled from '@emotion/native'
// Services
import getCurrentPrice from '../services/exchange-price'

const Wrapper = styled.ScrollView({
  flexGrow: 1,
})

const Container = styled.ScrollView({
  padding: 20,
  flex: 1,
})

const WalletCard = styled.View({
  height: 120,
  display: 'flex',
  backgroundColor: 'red',
  marginBottom: 20,
  padding: 20,
})

const BalanceLabel = styled.Text({
  color: 'white',
  fontSize: 16,
})

const CardText = styled.Text({
  color: 'white',
  fontSize: 18,
})

const ListWallets = ({data}) => {
  const [marketCapValue, setMarketCap] = useState(0)
  useEffect(() => {
    ;(async function getExchangePrice() {
      setMarketCap(await getCurrentPrice())
    })()
  }, [])

  const {wallets} = data

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {JSON.stringify(wallets) !== '{}' && (
          <Wrapper>
            <Container>
              {wallets.map((wallet, idx) => (
                <WalletCard key={idx}>
                  <BalanceLabel>Balance</BalanceLabel>
                  <CardText>{wallet.balance}</CardText>
                  <CardText>
                    Equivalent:{' '}
                    {marketCapValue > 0 ? (
                      `${wallet.balance * marketCapValue} USD`
                    ) : (
                      <ActivityIndicator color="white" />
                    )}
                  </CardText>
                </WalletCard>
              ))}
            </Container>
          </Wrapper>
        )}
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = ({data}) => ({
  data,
})

export default withNavigation(connect(mapStateToProps)(ListWallets))
