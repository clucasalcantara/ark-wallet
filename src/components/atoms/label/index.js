import React from 'react'
import styled from '@emotion/native'
import { string } from 'prop-types'

const StyledLabel = styled.Text({
  color: 'white',
  fontSize: 16,
  marginBottom: 10,
})

const Label = ({ content }) => <StyledLabel>{content}</StyledLabel>

Label.propTypes = {
  content: string.isRequired,
}

export default Label
