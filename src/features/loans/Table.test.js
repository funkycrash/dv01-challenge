import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Table from './Table'
import utils from '../../utils/utils'

describe('Table', () => {
  const loansData = {
    1: 1000,
    2: 2000,
    3: 3000
  }

  it('renders table', () => {
    const { container } = render(<Table data={loansData} />)

    const table = container.querySelector('table')
    expect(table).toBeInTheDocument()
  })

  it('renders correct number of header columns', () => {
    const { container } = render(<Table data={loansData} />)

    const headerColumns = container.querySelectorAll('th')
    expect(headerColumns.length).toBe(Object.keys(loansData).length)
  })

  it('renders correct content in header columns', () => {
    const { container } = render(<Table data={loansData} />)

    const headerColumns = container.querySelectorAll('th')
    headerColumns.forEach((headerColumn, index) => {
      const grade = index + 1
      expect(headerColumn).toHaveTextContent(`Grade ${grade}`)
    })
  })

  it('renders correct number of data cells', () => {
    const { container } = render(<Table data={loansData} />)

    const dataCells = container.querySelectorAll('td')
    expect(dataCells.length).toBe(Object.keys(loansData).length)
  })

  it('renders correct content in data cells', () => {
    const { container } = render(<Table data={loansData} />)

    const dataCells = container.querySelectorAll('td')
    dataCells.forEach((dataCell, index) => {
      const balance = Object.values(loansData)[index]
      expect(dataCell).toHaveTextContent(utils.formatCurrency(balance))
    })
  })
})
