import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from '@emotion/native'
import { bool, string } from 'prop-types'

const FooterText = styled.Text({
  color: 'white',
  fontSize: 12,
  alignSelf: 'baseline',
})

const Wrapper = styled.View({
  color: 'white',
  fontSize: 18,
})

const CardFooter = ({ balance, currency, isLoading }) => (
  <Wrapper
    accessible
    accessibilityLabel="Wallet card footer"
    accessibilityHint={`Displays the wallet balance in ${currency}`}
    accessibilityRole="text">
    {isLoading && <ActivityIndicator color="white" />}
    {!isLoading && (
      <FooterText>{`Equivalent: ${balance.toFixed(2)} ${currency}`}</FooterText>
    )}
  </Wrapper>
)

CardFooter.propTypes = {
  balance: string.isRequired,
  currency: string.isRequired,
  isLoading: bool,
}

CardFooter.defaultProps = {
  isLoading: true,
}

export default CardFooter
