import React from 'react'
import Cards from './Cards'
import '../../data'

function Tour({data}) {
  return (
    <div>
      <h1 className='text-3xl font-semibold py-2.5 px-10 border-4 border-black border-dashed rounded-xl'>Tour Package with Piyush</h1>
      <Cards data={data} />
    </div>
  )
}

export default Tour
