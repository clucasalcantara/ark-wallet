import React from 'react'
import styled from '@emotion/native'

const Wrapper = styled.TouchableOpacity({
  backgroundColor: 'red',
  width: 250,
  height: 50,
  borderRadius: 5,
  justifyContent: 'center',
})

const ButtonText = styled.Text({
  fontSize: 16,
  textAlign: 'center',
  color: 'white',
})

export default ({ handlePress, label }) => (
  <Wrapper onPress={handlePress}>
    <ButtonText>{label}</ButtonText>
  </Wrapper>
)
