import React from 'react'

const Table = loans => {
  console.log(loans.data)
  // Generate the table header columns dynamically
  const tableHeader = Object.keys(loans.data).map(grade => (
    <th key={grade}>Grade {grade}</th>
  ))

  //   // Generate the table rows dynamically
  const tableRows = (
    <tr>
      {Object.values(loans.data).map((balance, index) => (
        <td key={index}>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(balance)}
        </td>
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
