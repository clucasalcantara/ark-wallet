import React from 'react'
import styled from '@emotion/native'

const Wrapper = styled.TouchableOpacity({
  backgroundColor: '#F73F46',
  width: 250,
  height: 50,
  borderRadius: 5,
  justifyContent: 'center',
  shadowOpacity: 0.3,
  shadowRadius: 3,
  shadowColor: '#000',
  shadowOffset: { height: 3, width: 0 },
})

const ButtonText = styled.Text({
  fontSize: 16,
  textAlign: 'center',
  color: 'white',
})

export default ({ handlePress, label }) => (
  <Wrapper
    accessible
    accessibilityLabel={`${label} button `}
    accessibilityHint={`Tap to ${label}`}
    accessibilityRole="button"
    onPress={handlePress}>
    <ButtonText>{label}</ButtonText>
  </Wrapper>
)
