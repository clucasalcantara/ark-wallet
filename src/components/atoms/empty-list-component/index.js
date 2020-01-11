import React from 'react'
import styled from '@emotion/native'
import { Dimensions } from 'react-native'

const StyledText = styled.Text({
  alignSelf: 'center',
  fontSize: 18,
})

const Wrapper = styled.View({
  height: Dimensions.get('screen').height - 220,
  justifyContent: 'center',
})

export default () => (
  <Wrapper
    accessible
    accessibilityLabel="Wallet empty component"
    accessibilityHint="Appears when no wallet is imported"
    accessibilityRole="text">
    <StyledText>No wallets imported yet :(</StyledText>
  </Wrapper>
)
