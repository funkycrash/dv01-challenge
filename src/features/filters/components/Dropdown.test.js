import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Dropdown from './Dropdown'
import { statusFilterChanged } from '../filtersSlice'

// Create a mock Redux store
const mockStore = configureStore([])
const initialState = {
  filters: {
    homeOwnership: '',
    quarter: '',
    term: '',
    year: ''
  }
}
const store = mockStore(initialState)

// Define the test cases
describe('Dropdown', () => {
  it('renders options correctly', () => {
    const options = ['RENT', 'MORTGAGE', 'OWN']
    const disabledLabel = 'Home Ownership'
    const storeKey = 'homeOwnership'

    const { getByRole } = render(
      <Provider store={store}>
        <Dropdown
          options={options}
          disabledLabel={disabledLabel}
          storeKey={storeKey}
        />
      </Provider>
    )

    const dropdown = getByRole('combobox')
    expect(dropdown).toBeInTheDocument()

    options.forEach(option => {
      expect(dropdown).toHaveTextContent(option)
    })
  })

  it('dispatches statusFilterChanged action on value change', () => {
    const options = ['RENT', 'MORTGAGE', 'OWN']
    const disabledLabel = 'Home Ownership'
    const storeKey = 'homeOwnership'

    const { getByRole } = render(
      <Provider store={store}>
        <Dropdown
          options={options}
          disabledLabel={disabledLabel}
          storeKey={storeKey}
        />
      </Provider>
    )

    const dropdown = getByRole('combobox')
    // Simulate selecting an option
    fireEvent.change(dropdown, { target: { value: options[1] } })

    // Check if the action was dispatched
    const actions = store.getActions()
    expect(actions).toContainEqual(
      statusFilterChanged({ value: options[1], key: storeKey })
    )
  })
})
