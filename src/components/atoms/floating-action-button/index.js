import React from 'react'
import styled from '@emotion/native'
import { func } from 'prop-types'
// Assets
import plusIcon from '../../../assets/plus_icon.png'

const FloatingActionButton = styled.TouchableOpacity({
  position: 'absolute',
  width: 50,
  height: 50,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  right: 30,
  bottom: 120,
  backgroundColor: '#F73F46',
  shadowOpacity: 0.3,
  shadowRadius: 3,
  shadowColor: '#000',
  shadowOffset: { height: 3, width: 0 },
})

const PlusIconWrapper = styled.Image({
  width: 30,
  height: 30,
})

const FAB = ({ handlePress }) => (
  <FloatingActionButton
    accessible
    accessibilityLabel="Wallet import floating button"
    accessibilityHint="Displays the modal import to add a wallet"
    accessibilityRole="button"
    onPress={handlePress}>
    <PlusIconWrapper source={plusIcon} />
  </FloatingActionButton>
)

FAB.propTypes = {
  handlePress: func.isRequired,
}

export default FAB
