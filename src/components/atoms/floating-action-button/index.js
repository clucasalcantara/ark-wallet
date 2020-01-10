import React from 'react'
import styled from '@emotion/native'
// Assets
import plusIcon from '../../../assets/plus_icon.png'

const FAB = styled.TouchableOpacity({
  position: 'absolute',
  width: 50,
  height: 50,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  right: 30,
  bottom: 130,
  backgroundColor: 'red',
})

const PlusIconWrapper = styled.Image({
  width: 30,
  height: 30,
})

export default ({ handlePress }) => (
  <FAB onPress={handlePress}>
    <PlusIconWrapper source={plusIcon} />
  </FAB>
)
