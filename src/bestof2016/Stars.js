import React from 'react'
import numeral from 'numeral'

function formatDelta (delta, decimals = 0) {
  // return `+${delta}☆☆`
  const numberFormat = decimals === 0 || delta < 1000 ? '0' : `0.${'0'.repeat(decimals)}`
  const formattedNumber = numeral(delta).format(`${numberFormat}a`)
  // const formattedNumber = numeral(delta).format(`0a`)
  return `+${formattedNumber}`
}

const Stars = ({ value, decimals }) => {
  return (
    <span>
      {formatDelta(value, decimals)}
      <img className="star" src={`${process.env.PUBLIC_URL}/img/star.svg`} alt="☆" width="14" height="16" />
    </span>
  )
}
export default Stars
