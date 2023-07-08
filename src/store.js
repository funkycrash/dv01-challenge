import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from './features/filters/filtersSlice'
import loansSlice from './features/loans/loansSlice'

const store = configureStore({
  reducer: {
    loans: loansSlice,
    filters: filtersSlice
  }
})

export default store
