import { createStore } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import { applyMiddleware } from 'redux'
// Middlewares
import axiosMiddleware from 'redux-axios-middleware'
import { createLogger } from 'redux-logger'
// Reducers
import reducers from '../reducers'
// Api Client
import apiClient from '../../services/api-client'

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

export { store, persistor }
