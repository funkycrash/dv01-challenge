import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    filters: filtersSlice
  }
})

export default store
