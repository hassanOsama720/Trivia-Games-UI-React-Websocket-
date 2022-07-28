import { configureStore } from '@reduxjs/toolkit'
import followerSlice from './slices/followerSlice'
import questionReducer from './slices/questionSlice'

export default configureStore({
  reducer: {
    questions:questionReducer,
    followers:followerSlice
  }
})