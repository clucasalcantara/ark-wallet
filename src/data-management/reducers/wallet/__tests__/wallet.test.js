import { walletReducer } from '..'
import {
  GET_WALLET_BY_ADDRESS_SUCCESS,
  GET_WALLET_BY_PKEY_SUCCESS,
  CLEAN_ERRORS,
  REMOVE_WALLET,
} from '../../../actions/wallet'

const INITIAL_STATE = {
  wallets: [],
  loading: false,
  error: false,
}

describe('wallet reducer unit tests', () => {
  it('should return the initial state', () => {
    expect(walletReducer(undefined, {})).toEqual({
      error: false,
      loading: false,
      wallets: [],
    })
  })

  it('should handle GET_WALLET_BY_ADDRESS_SUCCESS', () => {
    expect(
      walletReducer(INITIAL_STATE, {
        type: GET_WALLET_BY_ADDRESS_SUCCESS,
        payload: {
          data: {
            data: {
              address: 'AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv',
              balance: '1924102354890976',
              isDelegate: false,
              publicKey:
                '021d03bace0687a1a5e797f884b13fb46f817ec32de1374a7f223f24404401d220',
            },
          },
        },
      }),
    ).toEqual({
      error: false,
      loading: false,
      wallets: [
        {
          address: 'AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv',
          balance: '1924102354890976',
          isDelegate: false,
          publicKey:
            '021d03bace0687a1a5e797f884b13fb46f817ec32de1374a7f223f24404401d220',
        },
      ],
    })
  })

  it('should handle GET_WALLET_BY_PKEY_SUCCESS', () => {
    expect(
      walletReducer(INITIAL_STATE, {
        type: GET_WALLET_BY_PKEY_SUCCESS,
        payload: {
          data: {
            data: {
              address: 'AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv',
              balance: '1924102354890976',
              isDelegate: false,
              publicKey:
                '021d03bace0687a1a5e797f884b13fb46f817ec32de1374a7f223f24404401d220',
            },
          },
        },
      }),
    ).toEqual({
      error: false,
      loading: false,
      wallets: [
        {
          address: 'AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv',
          balance: '1924102354890976',
          isDelegate: false,
          publicKey:
            '021d03bace0687a1a5e797f884b13fb46f817ec32de1374a7f223f24404401d220',
        },
      ],
    })
  })

  it('should handle removeWallet', () => {
    const STATE_WITH_WALLET = {
      error: false,
      loading: false,
      wallets: [
        {
          address: 'AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv',
          balance: '1924102354890976',
          isDelegate: false,
          publicKey:
            '021d03bace0687a1a5e797f884b13fb46f817ec32de1374a7f223f24404401d220',
        },
      ],
    }
    expect(
      walletReducer(STATE_WITH_WALLET, {
        type: REMOVE_WALLET,
        payload: {
          id: 'AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv',
        },
      }),
    ).toEqual({
      error: false,
      loading: false,
      wallets: [],
    })
  })

  it('should handle CLEAN_ERRORS', () => {
    expect(
      walletReducer(INITIAL_STATE, {
        type: CLEAN_ERRORS,
      }),
    ).toEqual({
      error: false,
      loading: false,
      wallets: [],
    })
  })
})
