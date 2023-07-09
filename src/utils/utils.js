const extractUniqueValues = loans => {
  const uniqueValues = loans.reduce(
    (accumulator, loan) => {
      const { homeOwnership, term, year, quarter } = loan
      if (!accumulator.homeOwnership.includes(homeOwnership)) {
        accumulator.homeOwnership.push(homeOwnership)
      }
      if (!accumulator.term.includes(term)) {
        accumulator.term.push(term)
      }
      if (!accumulator.year.includes(year)) {
        accumulator.year.push(year)
      }
      if (!accumulator.quarter.includes(quarter)) {
        accumulator.quarter.push(quarter)
      }
      return accumulator
    },
    {
      homeOwnership: [],
      term: [],
      year: [],
      quarter: []
    }
  )
  uniqueValues.homeOwnership = uniqueValues.homeOwnership
    .filter(option => option)
    .sort()
  uniqueValues.term = uniqueValues.term.filter(option => option).sort()
  uniqueValues.year = uniqueValues.year.filter(option => option).sort()
  uniqueValues.quarter = uniqueValues.quarter.filter(option => option).sort()

  return uniqueValues
}

const formatCurrency = value => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

export default { extractUniqueValues, formatCurrency }
