// Actions
import {
  GET_WALLET_BY_PKEY,
  GET_WALLET_BY_PKEY_SUCCESS,
  GET_WALLET_BY_PKEY_FAIL,
  GET_WALLET_BY_ADDRESS,
  GET_WALLET_BY_ADDRESS_SUCCESS,
  GET_WALLET_BY_ADDRESS_FAIL,
  REMOVE_WALLET,
  CLEAN_ERRORS,
} from '../../actions/wallet'

const INITIAL_STATE = {
  wallets: [],
  loading: false,
  error: false,
}

export const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WALLET_BY_ADDRESS:
    case GET_WALLET_BY_PKEY:
      return { ...state, loading: true }
    case GET_WALLET_BY_ADDRESS_SUCCESS: {
      const walletData = action.payload.data.data
      const stateToUpdate = state.wallets
      const alreadyExists = stateToUpdate.some(
        ({ address }) => address === walletData.address,
      )

      if (alreadyExists) {
        const indexToUpdate = stateToUpdate.findIndex(
          ({ address }) => address === walletData.address,
        )

        stateToUpdate[indexToUpdate] = walletData

        return {
          ...state,
          loading: false,
          wallets: stateToUpdate,
          error: false,
        }
      }

      return {
        ...state,
        loading: false,
        wallets: stateToUpdate.concat(walletData),
        error: false,
      }
    }
    case GET_WALLET_BY_PKEY_SUCCESS: {
      const walletData = action.payload.data.data
      const stateToUpdate = state.wallets
      const alreadyExists = stateToUpdate.some(
        ({ publicKey }) => publicKey === walletData.publicKey,
      )

      if (alreadyExists) {
        const indexToUpdate = stateToUpdate.findIndex(
          ({ publicKey }) => publicKey === walletData.publicKey,
        )

        stateToUpdate[indexToUpdate] = walletData

        return {
          ...state,
          loading: false,
          wallets: stateToUpdate,
          error: false,
        }
      }

      return {
        ...state,
        loading: false,
        wallets: stateToUpdate.concat(walletData),
        error: false,
      }
    }
    case GET_WALLET_BY_PKEY_FAIL:
    case GET_WALLET_BY_ADDRESS_FAIL:
      return { ...state, loading: false, error: 'Error getting wallet info' }
    case REMOVE_WALLET: {
      const walletAddress = action.payload.id
      const stateToUpdate = state.wallets.filter(
        wallet => walletAddress !== wallet.address,
      )

      return { ...state, wallets: stateToUpdate }
    }
    case CLEAN_ERRORS: {
      return { ...state, error: false }
    }
    default:
      return state
  }
}
