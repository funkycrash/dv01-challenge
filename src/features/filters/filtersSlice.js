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
    statusFilterChanged (state, action) {
      state[action.payload.key] = action.payload.value
    },
    resetFilters (state) {
      Object.keys(state).forEach(key => {
        state[key] = initalState[key]
      })
    }
  }
})

export const { resetFilters, statusFilterChanged } = filtersSlice.actions
export default filtersSlice.reducer
