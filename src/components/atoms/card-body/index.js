import React from 'react'
import styled from '@emotion/native'
// Assets
import arkSymbol from '../../../assets/ark_symbol.png'

const StyledText = styled.Text({
  color: 'white',
  fontSize: 18,
})

const ArkSymbol = styled.Image({
  height: 15,
  width: 15,
  marginRight: 10,
})

const Body = styled.View({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
})

export default ({ content, showSymbol }) => (
  <Body
    accessible
    accessibilityLabel={`Wallet balance`}
    accessibilityHint={`Displays the wallet balance in ARK`}
    accessibilityRole="text">
    {showSymbol && <ArkSymbol source={arkSymbol} />}
    <StyledText>{content}</StyledText>
  </Body>
)
