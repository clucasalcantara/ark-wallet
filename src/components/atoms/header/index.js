import React from 'react'
import styled from '@emotion/native'
import { string, bool } from 'prop-types'
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

const Header = ({ title, showLogo }) => (
  <Wrapper
    accessible
    accessibilityLabel="ARK Wallet Header"
    accessibilityHint="Displays ARK Logo"
    accessibilityRole="header">
    <HeaderText>{title}</HeaderText>
    {showLogo && <Logo source={ArkLogo} />}
  </Wrapper>
)

Header.propTypes = {
  title: string,
  showLogo: bool,
}

Header.defaultProps = {
  title: 'Welcome to ARK Wallet',
  showLogo: true,
}

export default Header
