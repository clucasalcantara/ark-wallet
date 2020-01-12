import React from 'react'
import styled from '@emotion/native'
import { bool, string } from 'prop-types'
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

const CardBody = ({ content, showSymbol }) => (
  <Body
    accessible
    accessibilityLabel={`Wallet balance`}
    accessibilityHint={`Displays the wallet balance in ARK`}
    accessibilityRole="text">
    {showSymbol && <ArkSymbol source={arkSymbol} />}
    <StyledText>{content}</StyledText>
  </Body>
)

CardBody.propTypes = {
  content: string.isRequired,
  showSymbol: bool,
}

CardBody.defaultProps = {
  showSymbol: true,
}

export default CardBody
