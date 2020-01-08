/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
// State management
import AsyncStorage from '@react-native-community/async-storage'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './data-management/reducers'
import {persistStore, persistReducer} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
// Nav
import Navigation from './navigation'
// Middlewares
import axiosMiddleware from 'redux-axios-middleware'
import {createLogger} from 'redux-logger'
// Api Client
import apiClient from './services/api-client'
import {applyMiddleware} from 'redux'

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['data'],
}
// Middleware: Redux Persist Persisted Reducer
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
