import utils from './utils'

describe('extractUniqueValues', () => {
  it('should extract unique values from loans array', () => {
    const loans = [
      { homeOwnership: 'Rent', term: 'Short-term', year: 2022, quarter: 'Q1' },
      { homeOwnership: 'Own', term: 'Long-term', year: 2022, quarter: 'Q2' },
      { homeOwnership: 'Rent', term: 'Short-term', year: 2023, quarter: 'Q1' },
      { homeOwnership: 'Own', term: 'Long-term', year: 2023, quarter: 'Q2' },
      { homeOwnership: 'Own', term: 'Short-term', year: 2023, quarter: 'Q3' },
      { homeOwnership: null, term: 'Short-term', year: undefined, quarter: '' }
    ]

    const expectedValues = {
      homeOwnership: ['Own', 'Rent'],
      term: ['Long-term', 'Short-term'],
      year: [2022, 2023],
      quarter: ['Q1', 'Q2', 'Q3']
    }

    const uniqueValues = utils.extractUniqueValues(loans)
    expect(uniqueValues).toEqual(expectedValues)
  })
})

describe('formatCurrency', () => {
  it('should format currency value correctly', () => {
    const value = 12345.67
    const formattedValue = utils.formatCurrency(value)
    expect(formattedValue).toBe('$12,345.67')
  })
})
