import React, { useState } from 'react'

function Card({ id, image, location, price, description, removeTour }) {

    const [readmore, setReadmore] = useState(false)

    const info = readmore ? description : `${description.substring(0, 250)}....`

    const readmoreHandler = () => {
        setReadmore(!readmore)
    }

    return (
        <div className='w-[350px] p-4 flex flex-col shadow-2xl rounded-lg'>
            <div>
                <img className=' rounded-md' src={image} alt="" />
                <h4>{price}</h4>
                <h3>{location}</h3>
                <p>{info}
                    <span onClick={readmoreHandler}>{readmore ? 'show less' : 'read more'}</span>
                </p>
            </div>
            <button className='text-xl  font-bold  py-2 px-16 bg-red-100 border-2 border-solid rounded-lg border-red-500 hover:bg-red-600 hover:text-white' onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    )
}

export default Card
