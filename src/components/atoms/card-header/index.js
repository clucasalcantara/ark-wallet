import React from 'react'
import styled from '@emotion/native'
// UI Elements
import Label from '../label'
import RemoveButton from '../remove-button'

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export default ({ action: { type, action, value }, actionEnabled, label }) => (
  <Wrapper>
    <Label content={label} />
    {actionEnabled && (
      <RemoveButton action={action} type={type} value={value} />
    )}
  </Wrapper>
)
