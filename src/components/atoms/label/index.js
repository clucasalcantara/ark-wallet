import React from 'react'
import styled from '@emotion/native'

const StyledLabel = styled.Text({
  color: 'white',
  fontSize: 16,
  marginBottom: 10,
})

export default ({ content }) => <StyledLabel>{content}</StyledLabel>
