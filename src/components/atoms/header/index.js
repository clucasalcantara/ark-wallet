import React from 'react'
import styled from '@emotion/native'
// Assets
import ArkLogo from '../../../assets/ark_logo.png'

const Wrapper = styled.View({
  height: 160,
  justifyContent: 'space-between',
  alignItems: 'center',
})

const HeaderText = styled.Text({
  fontSize: 18,
  color: 'gray',
})

const Logo = styled.Image({
  width: 120,
  height: 120,
})

export default ({ title, showLogo }) => (
  <Wrapper
    accessible
    accessibilityLabel="ARK Wallet Header"
    accessibilityHint="Displays ARK Logo"
    accessibilityRole="header">
    <HeaderText>{title}</HeaderText>
    {showLogo && <Logo source={ArkLogo} />}
  </Wrapper>
)
