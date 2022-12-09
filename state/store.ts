import { configureStore } from '@reduxjs/toolkit'
import likesReducer from './slices/likesSlice'

export default configureStore({
  reducer: {
    likes: likesReducer,
  },
})