import React, { Component } from 'react'
import './App.css'
import FilterPanel from './features/filters/components/FilterPanel'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>dv01 Loan Analysis</h1>
        <FilterPanel />
      </div>
    )
  }
}

export default App
