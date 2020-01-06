export const GET_WALLET = 'arkwallet/wallet-info/LOAD'
export const GET_WALLET_SUCCESS = 'arkwallet/wallet-info/LOAD_SUCCESS'
export const GET_WALLET_FAIL = 'arkwallet/wallet-info/LOAD_FAIL'

export const getWallet = id => ({
  type: GET_WALLET,
  payload: {
    request: {
      url: `/api/wallets/${id}`,
    },
  },
})
