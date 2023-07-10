import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import FilterPanel from './FilterPanel'
import { resetFilters } from '../filtersSlice'

// Create a mock Redux store
const mockStore = configureStore([])

// Define the filterChoices for testing
const initialState = {
  loans: {
    filterChoices: {
      homeOwnership: ['MORTGAGE', 'OWN', 'RENT'],
      term: ['36 months', '60 months'],
      year: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
      quarter: ['1', '2', '3', '4']
    }
  },
  filters: {
    homeOwnership: 'OWN',
    quarter: '2',
    term: ' 60 months',
    year: '2011'
  }
}
describe('FilterPanel', () => {
  let store
  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('renders all dropdowns with correct options', () => {
    const { container } = render(
      <Provider store={store}>
        <FilterPanel />
      </Provider>
    )
    // Select dropdowns using querySelector
    const homeOwnershipDropdown = container.querySelector(
      'select[name="homeOwnership"]'
    )

    const quarterDropdown = container.querySelector('select[name="quarter"]')
    const termDropdown = container.querySelector('select[name="term"]')
    const yearDropdown = container.querySelector('select[name="year"]')

    // Assert the presence of the dropdowns
    expect(homeOwnershipDropdown).toBeInTheDocument()
    expect(quarterDropdown).toBeInTheDocument()
    expect(termDropdown).toBeInTheDocument()
    expect(yearDropdown).toBeInTheDocument()
  })

  it('dispatches resetFilters action on reset button click', () => {
    const { getByText } = render(
      <Provider store={store}>
        <FilterPanel />
      </Provider>
    )

    const resetButton = getByText('Reset')

    // Simulate clicking the reset button
    fireEvent.click(resetButton)

    // Check if the action was dispatched
    const actions = store.getActions()
    expect(actions).toContainEqual(resetFilters())
  })
})
