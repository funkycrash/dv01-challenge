import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import FilterPanel from './features/filters/components/FilterPanel'
import { fetchLoans } from './features/loans/loansSlice'
import LoanContainer from './features/loans/LoanContainer'

const App = () => {
  const dispatch = useDispatch()
  const status = useSelector(state => state.loans.status)

  useEffect(() => {
    dispatch(fetchLoans())
  }, [dispatch])

  return (
    <div className='App'>
      <h1>dv01 Loan Analysis</h1>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && (
        <p>We've encountered an error please contact us.</p>
      )}
      {status === 'idle' && (
        <>
          <LoanContainer />
          <FilterPanel />
        </>
      )}
    </div>
  )
}

export default App
