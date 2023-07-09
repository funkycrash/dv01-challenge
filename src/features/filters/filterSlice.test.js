import filtersReducer, {
  resetFilters,
  statusFilterChanged
} from './filtersSlice'

describe('filtersSlice', () => {
  describe('reducers', () => {
    it('should handle statusFilterChanged', () => {
      const initialState = {
        homeOwnership: '',
        quarter: '',
        term: '',
        year: ''
      }

      const expectedState = {
        homeOwnership: '',
        quarter: '',
        term: '36 months',
        year: ''
      }

      const action = statusFilterChanged({ key: 'term', value: '36 months' })
      const nextState = filtersReducer(initialState, action)

      expect(nextState).toEqual(expectedState)
    })

    it('should handle resetFilters', () => {
      const initialState = {
        homeOwnership: 'RENT',
        quarter: '1',
        term: '36 months',
        year: '2011'
      }

      const expectedState = {
        homeOwnership: '',
        quarter: '',
        term: '',
        year: ''
      }

      const action = resetFilters()
      const nextState = filtersReducer(initialState, action)

      // Assert the expected state
      expect(nextState).toEqual(expectedState)
    })
  })
})
