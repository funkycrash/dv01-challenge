import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from 'recharts'
import utils from '../../utils/utils'

const BarGraph = loans => {
  const chartData = Object.keys(loans.data).map(grade => ({
    grade,
    balance: loans.data[grade]
  }))

  return (
    <ResponsiveContainer width={600} height='80%'>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='grade'>
          <Label>Grade</Label>
        </XAxis>
        <YAxis tickFormatter={value => utils.formatCompact(value)} />
        <Tooltip formatter={value => utils.formatCurrency(value)} />
        <Legend />
        <Bar dataKey='balance' fill='#855ffc' />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarGraph
