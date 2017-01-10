import React from 'react'
import numeral from 'numeral'

function formatDelta (delta, decimals = 0) {
  // return `+${delta}☆☆`
  const numberFormat = decimals === 0 || delta < 1000 ? '0' : `0.${'0'.repeat(decimals)}`
  const formattedNumber = numeral(delta).format(`${numberFormat}a`)
  // const formattedNumber = numeral(delta).format(`0a`)
  return `+${formattedNumber}☆`
}

const Stars = ({ value, decimals }) => {
  return (
    <span>
      {formatDelta(value, decimals)}
    </span>
  )
}
export default Stars
