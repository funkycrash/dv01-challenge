import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { statusFilterChanged } from '../filtersSlice'

const Dropdown = ({ options, disabledLabel, storeKey }) => {
  const dispatch = useDispatch()
  const selectedValue = useSelector(state => state.filters[storeKey])

  const onStatusChange = event => {
    const selectedStatus = event.target.value
    dispatch(statusFilterChanged({ value: selectedStatus, key: storeKey }))
  }

  // Filter non-null and non-empty values
  const filteredOptions = options.filter(option => option)

  return (
    <select
      className='one-fourth'
      value={selectedValue}
      onChange={onStatusChange}
    >
      <option disabled value=''>
        {disabledLabel}
      </option>
      {filteredOptions.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
