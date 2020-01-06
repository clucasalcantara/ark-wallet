// Actions
import {
  GET_WALLET,
  GET_WALLET_SUCCESS,
  GET_WALLET_FAIL,
} from '../../actions/wallet'

const INITIAL_STATE = {
  wallet: {},
  loading: false,
}

export const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WALLET:
      return {...state, loading: true}
    case GET_WALLET_SUCCESS:
      return {...state, loading: false, wallet: action.payload.data.data}
    case GET_WALLET_FAIL:
      return {...state, loading: false, error: 'Error getting wallet info'}
    default:
      return state
  }
}
