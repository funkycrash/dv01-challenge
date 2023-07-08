import { createSlice } from '@reduxjs/toolkit'

const initalState = {
  homeOwnership: '',
  quarter: '',
  term: '',
  year: ''
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initalState,
  reducers: {
    resetFilters (state) {
      state = initalState
    }
  }
})

export const { resetFilters } = filtersSlice.actions
export default filtersSlice.reducer
