// Actions
import {
  GET_WALLET,
  GET_WALLET_SUCCESS,
  GET_WALLET_FAIL,
} from '../../actions/wallet'

const INITIAL_STATE = {
  wallets: [],
  loading: false,
  error: false,
}

export const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WALLET:
      return {...state, loading: true}
    case GET_WALLET_SUCCESS: {
      const walletData = action.payload.data.data
      const stateToUpdate = state.wallets
      console.log('aaaaa', stateToUpdate)
      const alreadyExists = stateToUpdate.find(
        ({address}) => address === walletData.address,
      )
      console.log('Already exists?', alreadyExists)
      console.log('Reducer data', walletData)

      return {
        ...state,
        loading: false,
        // wallets: !alreadyExists
        //   ? stateToUpdate.concat(walletData)
        //   : stateToUpdate,
        wallets: stateToUpdate.concat(walletData),
        error: alreadyExists ? 'Wallet already added' : false,
      }
    }
    case GET_WALLET_FAIL:
      return {...state, loading: false, error: 'Error getting wallet info'}
    default:
      return state
  }
}
