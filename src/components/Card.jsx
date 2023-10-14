import React from 'react'

function Card({image,location,description,price}) {
  return (
    <div>
        <div>
        <img src={image} alt="" />
        <h3>{price}</h3>
        <h4>{location}</h4>
        <p>{description}</p>
        </div>
        <button>Not Interested</button>
    </div>
  )
}

export default Card
