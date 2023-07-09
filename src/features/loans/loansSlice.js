import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import { getData } from '../../request/api'
import utils from '../../utils/utils'

const loansAdapter = createEntityAdapter()
const initialState = loansAdapter.getInitialState({
  status: 'idle',
  filterChoices: {}
})

export const fetchLoans = createAsyncThunk('loans/fetchLoans', async () => {
  const response = await getData()

  // Generate unique IDs for each loan object since it's missing
  const loansWithId = response.map((loan, index) => ({
    ...loan,
    id: index + 1 // Generate ID based on index
  }))

  return loansWithId
})

const loansSlice = createSlice({
  name: 'loans',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLoans.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchLoans.fulfilled, (state, action) => {
        loansAdapter.setAll(state, action.payload)
        state.status = 'idle'
        const filterChoices = utils.extractUniqueValues(action.payload)
        state.filterChoices = filterChoices
      })
      .addCase(fetchLoans.rejected, state => {
        state.status = 'error'
      })
  }
})

export default loansSlice.reducer
