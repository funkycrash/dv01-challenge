import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import Table from './Table'
import BarGraph from './BarGraph'
import NoData from './NoData'

const LoanContainer = () => {
  // Redux selector to access the filter values
  const { homeOwnership, quarter, term, year } = useSelector(
    state => state.filters
  )

  // Redux selector to access the loans data
  const loans = useSelector(state => state.loans.entities)

  // Memoized data aggregation logic
  const memoizedData = useMemo(() => {
    // Filter the loans based on the provided filters, or use all loans if no filters are selected
    let filteredLoans = Object.values(loans)
    if (homeOwnership) {
      filteredLoans = filteredLoans.filter(
        loan => loan.homeOwnership === homeOwnership
      )
    }
    if (quarter) {
      filteredLoans = filteredLoans.filter(loan => loan.quarter === quarter)
    }
    if (term) {
      filteredLoans = filteredLoans.filter(loan => loan.term === term)
    }
    if (year) {
      filteredLoans = filteredLoans.filter(loan => loan.year === year)
    }

    // Aggregate the current balance for each grade
    const grades = {}
    filteredLoans.forEach(loan => {
      if (loan.grade) {
        if (grades[loan.grade]) {
          grades[loan.grade] += parseFloat(loan.currentBalance)
        } else {
          grades[loan.grade] = parseFloat(loan.currentBalance)
        }
      }
    })

    return grades
  }, [loans, homeOwnership, quarter, term, year])

  // Local UI logic
  const [view, setView] = useState('table')

  const handleViewToggle = () => {
    setView(prevView => (prevView === 'barGraph' ? 'table' : 'barGraph'))
  }

  const toggleButtonLabel =
    view === 'barGraph' ? 'Switch to Table View' : 'Switch to Graph View'

  const noData = Object.keys(memoizedData).length === 0

  return (
    <>
      <h1 className='text-center'>
        dv01 Loan Analysis{' '}
        <span>
          <button onClick={handleViewToggle}>{toggleButtonLabel}</button>
        </span>
      </h1>
      <div className='flex-row vertical-center' id='loan-container'>
        <div
          className='medium-container vertical-center'
          style={{ height: '300px' }}
        >
          {noData && <NoData />}
          {!noData && view === 'barGraph' && <BarGraph data={memoizedData} />}
          {!noData && view === 'table' && <Table data={memoizedData} />}
        </div>
      </div>
    </>
  )
}

export default LoanContainer
