import React from 'react'
import utils from '../../utils/utils'

const Table = loans => {
  // Generate the table header columns dynamically
  const tableHeader = Object.keys(loans.data).map(grade => (
    <th key={grade}>Grade {grade}</th>
  ))

  //   // Generate the table rows dynamically
  const tableRows = (
    <tr>
      {Object.values(loans.data).map((balance, index) => (
        <td key={index}>{utils.formatCurrency(balance)}</td>
      ))}
    </tr>
  )

  return (
    <table>
      <thead>
        <tr>{tableHeader}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  )
}

export default Table
