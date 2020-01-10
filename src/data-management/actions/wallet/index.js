export const GET_WALLET_BY_ADDRESS = 'arkwallet/wallet-info-by-address/LOAD'
export const GET_WALLET_BY_ADDRESS_SUCCESS =
  'arkwallet/wallet-info-by-address/LOAD_SUCCESS'
export const GET_WALLET_BY_ADDRESS_FAIL =
  'arkwallet/wallet-info-by-address/LOAD_FAIL'

export const GET_WALLET_BY_PKEY = 'arkwallet/wallet-info-by-pkey/LOAD'
export const GET_WALLET_BY_PKEY_SUCCESS =
  'arkwallet/wallet-info-by-pkey/LOAD_SUCCESS'
export const GET_WALLET_BY_PKEY_FAIL = 'arkwallet/wallet-info-by-pkey/LOAD_FAIL'

export const REMOVE_WALLET = 'arkwallet/wallet-removal'
export const REFRESH_WALLETS = 'arkwallet/wallets-refresh'

export const getWallet = (id, useAddressField) => ({
  type: useAddressField ? GET_WALLET_BY_ADDRESS : GET_WALLET_BY_PKEY,
  payload: {
    request: {
      url: `/api/wallets/${id}`,
    },
  },
})

export const removeWallet = id => ({
  type: REMOVE_WALLET,
  payload: {
    id,
  },
})

export const refreshWallets = () => ({
  type: REFRESH_WALLETS,
})
