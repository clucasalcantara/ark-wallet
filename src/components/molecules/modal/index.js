import React from 'react'
import styled from '@emotion/native'
import { arrayOf, bool, oneOfType, node, func } from 'prop-types'

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
  backgroundColor: '#F73F46',
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

const ModalWrapper = styled.Modal({})

const Modal = ({ children, closeAction, isClosed }) => (
  <ModalWrapper animationType="fade" visible={isClosed} transparent>
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
  </ModalWrapper>
)

Modal.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  closeAction: func.isRequired,
  isClosed: bool,
}

Modal.defaultProps = {
  isClosed: true,
}

export default Modal
