import React from 'react'
import Card from './Card'

function Tours({ tours,removeTour }) {
  return (
    <div className='flex flex-col items-center gap-10'>
      <div>
        <h2 className='text-3xl font-bold text-center border-4 border-dashed border-blue-600 px-16 rounded-lg py-2'>Plan with Love</h2>
      </div>
      <div className=' flex flex-wrap'>
        {
          tours.map((tour) => {
            return <Card {...tour} removeTour={removeTour} />

          })
        }
      </div>
    </div>
  )
}

export default Tours
