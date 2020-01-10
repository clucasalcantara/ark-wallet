import React from 'react'
import styled from '@emotion/native'
// UI Elements
import CardHeader from '../../atoms/card-header'
import CardFooter from '../../atoms/card-footer'
import CardBody from '../../atoms/card-body'

const Wrapper = styled.View({
  height: 120,
  display: 'flex',
  backgroundColor: 'red',
  marginBottom: 20,
  padding: 20,
  justifyContent: 'space-between',
})

export default ({
  address,
  balance,
  marketCapValue,
  action: { type, action },
}) => (
  <Wrapper>
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
