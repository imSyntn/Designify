import React from 'react'
import '../../Styles/Reviews/ReviewCard.scss'
import { FaStar } from "react-icons/fa";

const ReviewCard = ({item}) => {
  return (
    <div className='ReviewCard'>
      <div className="imgName">
        <img src={item.img} alt="" />
        <div className="name">
          <h1>{item.name}</h1>
          <p>{item.work}</p>
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
      </div>
      <p>{item.text}</p>
    </div>
  )
}

export default ReviewCard