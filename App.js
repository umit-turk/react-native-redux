import React from 'react'
import { View, Text } from 'react-native'
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './src/navigation'
import store from './src/redux'

const persistor = persistStore(store)

export default function App() {
  return (
    <PersistGate persistor = {persistor}>
      <Navigation/>
    </PersistGate>
  )
}
