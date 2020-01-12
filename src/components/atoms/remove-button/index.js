import React from 'react'
import { Alert } from 'react-native'
import styled from '@emotion/native'
import { string, func } from 'prop-types'
// Assets
import trashIcon from '../../../assets/trash_icon.png'

const RemoveIcon = styled.Image({
  height: 20,
  width: 20,
})

const StyledButton = styled.TouchableOpacity({
  color: 'white',
  fontSize: 16,
})

const executeAction = ({ action, type, value }) =>
  Alert.alert('Warning', `Do you really want to ${type}?`, [
    {
      text: 'Confirm',
      onPress: () => action(value),
    },
    {
      text: 'Cancel',
      style: 'cancel',
    },
  ])

const RemoveButton = ({ action, type, value }) => (
  <StyledButton
    accessible
    accessibilityLabel="Wallet remove button"
    accessibilityHint="Removes a wallet from the list"
    accessibilityRole="button"
    onPress={() => executeAction({ action, type, value })}>
    <RemoveIcon source={trashIcon} />
  </StyledButton>
)

RemoveButton.propTypes = {
  type: string.isRequired,
  action: func.isRequired,
  value: string.isRequired,
}

export default RemoveButton
