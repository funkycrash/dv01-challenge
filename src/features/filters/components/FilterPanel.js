import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Dropdown from './Dropdown'
import { resetFilters } from '../filtersSlice'

const FilterPanel = () => {
  const dispatch = useDispatch()
  const onResetFilter = () => dispatch(resetFilters())

  const { homeOwnership, year, quarter, term } = useSelector(
    state => state.loans.filterChoices
  )

  return (
    <footer className='footer'>
      <div className='flex-row'>
        <div className='flex-small'>
          <Dropdown
            options={homeOwnership || []}
            disabledLabel='Home Ownership'
            storeKey={'homeOwnership'}
          />
        </div>
        <div className='flex-small'>
          <Dropdown
            options={quarter || []}
            disabledLabel='Quarter'
            storeKey={'quarter'}
          />
        </div>
        <div className='flex-small'>
          <Dropdown
            options={term || []}
            disabledLabel='Term'
            storeKey={'term'}
          />
        </div>
        <div className='flex-small'>
          <Dropdown
            options={year || []}
            disabledLabel='Year'
            storeKey={'year'}
          />
        </div>
        <button onClick={onResetFilter}>Reset</button>
      </div>
    </footer>
  )
}

export default FilterPanel
