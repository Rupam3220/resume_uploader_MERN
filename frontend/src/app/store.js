import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userProfileApi } from '../services/userProfileApi.js'

export const store = configureStore({
  reducer: {

    [userProfileApi.reducerPath]: userProfileApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userProfileApi.middleware),
})

setupListeners(store.dispatch)