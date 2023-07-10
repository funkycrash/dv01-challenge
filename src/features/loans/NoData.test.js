import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NoData from './NoData'

describe('NoData', () => {
  it('renders the "No data" heading', () => {
    const { getByText } = render(<NoData />)
    const headingElement = getByText('No data')
    expect(headingElement).toBeInTheDocument()
  })

  it('renders the SVG icon', () => {
    const { container } = render(<NoData />)
    const svgElement = container.querySelector('svg')
    expect(svgElement).toBeInTheDocument()
  })

  it('renders the correct number of paths in the SVG', () => {
    const { container } = render(<NoData />)
    const pathElements = container.querySelectorAll('svg path')
    expect(pathElements.length).toBe(4)
  })
})
