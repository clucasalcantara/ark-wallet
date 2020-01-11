import React from 'react'
import { Modal } from 'react-native'
import styled from '@emotion/native'

const CloseText = styled.Text({
  fontSize: 16,
  textAlign: 'center',
  color: 'white',
})

const Wrapper = styled.KeyboardAvoidingView({
  flex: 1,
  justifyContent: 'center',
  padding: 20,
  backgroundColor: 'black',
  opacity: 0.95,
})

const CloseButton = styled.TouchableOpacity({
  backgroundColor: 'red',
  width: 30,
  height: 30,
  borderRadius: 5,
  justifyContent: 'center',
  alignSelf: 'flex-end',
  marginBottom: 10,
})

const Body = styled.View({
  borderRadius: 5,
  height: 400,
  backgroundColor: 'white',
  alignItems: 'center',
})

export default ({ children, closeAction, isClosed }) => (
  <Modal animationType="fade" visible={isClosed} transparent>
    <Wrapper behavior="padding">
      <CloseButton
        accessibilityLabel="Import modal close button"
        accessibilityHint="Tap to close import modal"
        accessibilityRole="button"
        onPress={() => closeAction(false)}>
        <CloseText>X</CloseText>
      </CloseButton>
      <Body>{children}</Body>
    </Wrapper>
  </Modal>
)
