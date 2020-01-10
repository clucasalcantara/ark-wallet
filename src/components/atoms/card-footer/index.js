import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from '@emotion/native'

const FooterText = styled.Text({
  color: 'white',
  fontSize: 12,
  alignSelf: 'baseline',
})

const CardFooter = styled.View({
  color: 'white',
  fontSize: 18,
})

export default ({ balance, currency, isLoading }) => (
  <CardFooter>
    {isLoading && <ActivityIndicator color="white" />}
    {!isLoading && <FooterText>
      {`Equivalent: ${balance.toFixed(2)} ${currency}`}
    </FooterText>}
  </CardFooter>
)