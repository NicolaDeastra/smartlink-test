import { configureStore } from '@reduxjs/toolkit'
import gajiReducer from './gaji/slice'

const store = configureStore({
  reducer: {
    gaji: gajiReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export default store
