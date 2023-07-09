import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Table from './Table'

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

  return <Table data={memoizedData} />
}

export default LoanContainer
