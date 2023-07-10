import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import LoanContainer from './LoanContainer'

// Create a mock Redux store
const mockStore = configureStore([])

describe('LoanContainer', () => {
  const initialState = {
    filters: {
      homeOwnership: 'OWN',
      quarter: '2',
      term: '60 months',
      year: '2011'
    },
    loans: {
      entities: {
        1: {
          grade: 'A',
          homeOwnership: 'OWN',
          quarter: '2',
          term: '60 months',
          year: '2011',
          currentBalance: '1000'
        },
        2: {
          grade: 'B',
          homeOwnership: 'OWN',
          quarter: '2',
          term: '60 months',
          year: '2011',
          currentBalance: '2000'
        }
      }
    }
  }

  let store
  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('renders the loan container', () => {
    const { container } = render(
      <Provider store={store}>
        <LoanContainer />
      </Provider>
    )
    const loanContainer = container.querySelector('#loan-container')
    expect(loanContainer).toBeInTheDocument()
  })

  it('renders the toggle button with correct label', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <LoanContainer />
      </Provider>
    )
    const toggleButton = getByRole('button')
    const toggleButtonLabel =
      initialState.view === 'barGraph'
        ? 'Switch to Table View'
        : 'Switch to Graph View'
    expect(toggleButton).toHaveTextContent(toggleButtonLabel)
  })
})
