import React, { useState } from 'react'

function Card({ id, image, location, price, description, removeTour }) {

    const [readmore, setReadmore] = useState(false)

    const info = readmore ? description : `${description.substring(0, 250)}....`

    const readmoreHandler = () => {
        setReadmore(!readmore)
    }

    return (
        <div>
            <div>
                <img src={image} alt="" />
                <h4>{price}</h4>
                <h3>{location}</h3>
                <p>{info}
                    <span onClick={readmoreHandler}>{readmore ? 'show less' : 'read more'}</span>
                </p>
            </div>
            <button onClick={() => removeTour(id)}>Not Intrested</button>
        </div>
    )
}

export default Card
