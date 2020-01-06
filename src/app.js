/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
// State management
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './data-management/reducers'
// Nav
import Navigation from './navigation'
// Middlewares
import axiosMiddleware from 'redux-axios-middleware'
// Api Client
import apiClient from './services/api-client'
import {applyMiddleware} from 'redux'

const store = createStore(reducers, applyMiddleware(axiosMiddleware(apiClient)))

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
