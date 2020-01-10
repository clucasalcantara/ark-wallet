/**
 * @format
 * @flow
 */
import React, { useEffect, useState, useCallback } from 'react'
import {
  SafeAreaView,
  StatusBar,
  RefreshControl,
  Dimensions,
} from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
// Styled components
import styled from '@emotion/native'
// Services
import { getMarketPrice } from '../services'
import { removeWallet, getWallet } from '../data-management/actions/wallet'
// UI Elements
import { Card, ImportModal } from '../components/molecules'
import { EmptyListComponent, FAB } from '../components/atoms'

const Wrapper = styled.View({
  flexGrow: 1,
  height: Dimensions.get('window').height,
})

const Container = styled.FlatList({
  flex: 1,
  padding: 20,
})

const WalletList = ({
  data: { wallets, loading },
  removeWallet,
  getWallet,
}) => {
  console.log({ wallets })
  const [marketCapValue, setMarketCap] = useState(0)
  const [isRefreshing, setRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const onRefresh = useCallback(async () => {
    setRefreshing(true)

    wallets.map(({ address }) => getWallet(address))

    setRefreshing(false)
  }, [isRefreshing])

  useEffect(() => {
    ;(async function getExchangePrice() {
      setMarketCap(await getMarketPrice())
    })()
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImportModal
        isVisible={modalVisible}
        handleVisibility={setModalVisible}
        isLoading={loading}
      />
      <SafeAreaView>
        {JSON.stringify(wallets) !== '{}' && (
          <Wrapper>
            <Container
              contentContainerStyle={{ paddingBottom: 120 }}
              contentInsetAdjustmentBehavior="automatic"
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={onRefresh}
                />
              }
              data={wallets}
              ListEmptyComponent={<EmptyListComponent />}
              // ListFooterComponent={}
              renderItem={({ item: { address, balance } }) => (
                <Card
                  action={{ type: 'remove', action: removeWallet }}
                  address={address}
                  balance={balance}
                  marketCapValue={marketCapValue}
                />
              )}
              keyExtractor={item => item.address}
            />
            <FAB handlePress={() => setModalVisible(true)} />
          </Wrapper>
        )}
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = ({ data }) => ({
  data,
})

const mapDispatchToProps = {
  removeWallet,
  getWallet,
}

export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(WalletList),
)
