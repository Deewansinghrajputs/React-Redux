import { configureStore } from '@reduxjs/toolkit'
import jokeReducer from './Reducer/jokeReducer'

export const store = configureStore({
  reducer: {
    joke : jokeReducer
  },
})


