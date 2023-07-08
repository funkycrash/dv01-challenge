import React from 'react'
import { useDispatch } from 'react-redux'
import { resetFilters } from '../filtersSlice'

const FilterPanel = () => {
  const dispatch = useDispatch()
  const onResetFilter = dispatch(resetFilters())

  return (
    <div className='flex-row'>
      <button onClick={onResetFilter}>Reset</button>
    </div>
  )
}

export default FilterPanel
