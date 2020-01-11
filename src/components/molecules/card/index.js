import React from 'react'
import styled from '@emotion/native'
// UI Elements
import CardHeader from '../../atoms/card-header'
import CardFooter from '../../atoms/card-footer'
import CardBody from '../../atoms/card-body'

const Wrapper = styled.View({
  height: 120,
  display: 'flex',
  backgroundColor: '#F73F46',
  marginBottom: 20,
  padding: 20,
  justifyContent: 'space-between',
  shadowOpacity: 0.3,
  shadowRadius: 3,
  shadowColor: '#000',
  shadowOffset: { height: 3, width: 0 },
  borderRadius: 5,
})

export default ({
  address,
  balance,
  marketCapValue,
  action: { type, action },
}) => (
  <Wrapper
    accessible
    accessibilityLabel="Wallet card"
    accessibilityHint="Displays the wallet information">
    <CardHeader
      label="Balance"
      action={{ action, type, value: address }}
      actionEnabled
    />
    <CardBody showSymbol={true} content={balance} />
    <CardFooter
      balance={balance * marketCapValue}
      isLoading={marketCapValue === 0}
      currency="USD"
    />
  </Wrapper>
)
