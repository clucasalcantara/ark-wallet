/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// Reducers
import reducers from './data-management/reducers'
// Navigation
import Navigation from './navigation'
// Middlewares
import axiosMiddleware from 'redux-axios-middleware'
import { createLogger } from 'redux-logger'
// Api Client
import apiClient from './services/api-client'
import { applyMiddleware } from 'redux'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['data'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
  persistedReducer,
  applyMiddleware(axiosMiddleware(apiClient), createLogger()),
)

const persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  )
}

export default App
