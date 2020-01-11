import configureMockStore from 'redux-mock-store'
import axiosMiddleware from 'redux-axios-middleware'

import { apiClient } from '../../../../services'
import { getWallet } from '..'

let middlewares = [axiosMiddleware(apiClient)]
const mockStore = configureMockStore(middlewares)
const store = mockStore()

describe('wallet actions unit tests', () => {
  it('should have a load action on getWallet', () => {
    const expectedAction = { type: 'arkwallet/wallet-info-by-pkey/LOAD' }
    return store.dispatch(getWallet('1')).then(() => {
      expect(
        store.getActions().find(a => a.type === expectedAction.type),
      ).toBeDefined()
    })
  })

  it('should have a fail action on getWallet with an invalid wallet address', () => {
    const expectedAction = { type: 'arkwallet/wallet-info-by-pkey/LOAD_FAIL' }
    return store.dispatch(getWallet('1')).then(() => {
      expect(
        store.getActions().find(a => a.type === expectedAction.type),
      ).toBeDefined()
    })
  })

  it('should have a success action on getWallet with an valid wallet address', () => {
    const expectedAction = {
      type: 'arkwallet/wallet-info-by-pkey/LOAD_SUCCESS',
    }
    return store
      .dispatch(getWallet('AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv'))
      .then(() => {
        expect(
          store.getActions().find(a => a.type === expectedAction.type),
        ).toBeDefined()
      })
  })

  it('should use address type if getWallet is used with useAddressField', () => {
    const expectedAction = {
      type: 'arkwallet/wallet-info-by-address/LOAD_SUCCESS',
    }
    return store
      .dispatch(getWallet('AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv', true))
      .then(() => {
        expect(
          store.getActions().find(a => a.type === expectedAction.type),
        ).toBeDefined()
      })
  })
})
