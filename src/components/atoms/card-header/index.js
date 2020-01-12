import React from 'react'
import styled from '@emotion/native'
import { bool, shape, string, func } from 'prop-types'
// UI Elements
import Label from '../label'
import RemoveButton from '../remove-button'

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const CardHeader = ({
  action: { type, action, value },
  actionEnabled,
  label,
}) => (
  <Wrapper
    accessible
    accessibilityLabel="Wallet card header"
    accessibilityHint="Contains a remove button and wallet label"
    accessibilityRole="text">
    <Label content={label} />
    {actionEnabled && (
      <RemoveButton action={action} type={type} value={value} />
    )}
  </Wrapper>
)

CardHeader.propTypes = {
  action: shape({
    type: string,
    action: func,
    value: string,
  }).isRequired,
  label: string.isRequired,
  actionEnabled: bool,
}

CardHeader.defaultProps = {
  actionEnabled: true,
}

export default CardHeader
