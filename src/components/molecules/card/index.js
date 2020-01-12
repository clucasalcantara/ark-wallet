import React from 'react'
import styled from '@emotion/native'
import { string, number, func, shape } from 'prop-types'
// UI Elements
import { CardBody, CardFooter, CardHeader } from '../../atoms'

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

const Card = ({
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

Card.propTypes = {
  address: string.isRequired,
  balance: number.isRequired,
  marketCapValue: number.isRequired,
  action: shape({
    type: string,
    action: func,
  }).isRequired,
}

export default Card
