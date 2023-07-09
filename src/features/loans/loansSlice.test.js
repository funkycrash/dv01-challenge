import loansReducer, { fetchLoans } from './loansSlice'
import { configureStore } from '@reduxjs/toolkit'
import utils from '../../utils/utils'

describe('loansSlice', () => {
  let store

  beforeEach(() => {
    store = configureStore({ reducer: { loans: loansReducer } })
  })

  it('should handle fetchLoans.pending', () => {
    store.dispatch(fetchLoans())

    const state = store.getState()
    expect(state.loans.status).toBe('loading')
  })

  it('should handle fetchLoans.fulfilled', () => {
    const mockLoans = [
      {
        year: '2015',
        quarter: '4',
        grade: '2',
        homeOwnership: 'MORTGAGE',
        term: ' 36 months',
        currentBalance: '13340.3884795713',
        id: 1
      },
      {
        year: '2014',
        quarter: '3',
        grade: '4',
        homeOwnership: 'RENT',
        term: ' 36 months',
        currentBalance: '10254.3896155371',
        id: 2
      }
    ]

    jest.spyOn(utils, 'extractUniqueValues').mockReturnValue({
      homeOwnership: ['MORTGAGE', 'OWN', 'RENT'],
      term: [' 36 months', ' 60 months'],
      year: ['', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
      quarter: ['1', '2', '3', '4']
    })

    store.dispatch(fetchLoans.fulfilled(mockLoans))

    const state = store.getState()
    expect(state.loans.status).toBe('idle')
    expect(state.loans.filterChoices).toEqual({
      homeOwnership: ['MORTGAGE', 'OWN', 'RENT'],
      term: [' 36 months', ' 60 months'],
      year: ['', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
      quarter: ['1', '2', '3', '4']
    })
  })

  it('should handle fetchLoans.rejected', () => {
    store.dispatch(fetchLoans.rejected())

    const state = store.getState()
    expect(state.loans.status).toBe('error')
  })
})
