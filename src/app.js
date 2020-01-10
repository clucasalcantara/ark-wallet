/**
 *
 * @format
 * @flow
 */
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
// Navigator
import Navigator from './navigation'
// Custom Store
import { store, persistor } from './data-management/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  )
}

export default App
