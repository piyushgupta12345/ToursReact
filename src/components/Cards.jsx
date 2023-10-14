import React from 'react'
import Card from './Card'

function Cards({ data }) {
  return (
    <div>
      {
        data.map((data) => {
          return (
            <Card data={...data} />
          )
        })
      }
    </div>
  )
}

export default Cards
