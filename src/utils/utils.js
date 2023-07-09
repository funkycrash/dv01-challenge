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
  uniqueValues.homeOwnership.sort()
  uniqueValues.term.sort()
  uniqueValues.year.sort()
  uniqueValues.quarter.sort()

  return uniqueValues
}

export default { extractUniqueValues }
