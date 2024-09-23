import React from 'react'
import '../../Styles/Reviews/ReviewCard.scss'
import { FaStar } from "react-icons/fa";
import { motion } from 'framer-motion'

const ReviewCard = ({ item }) => {

  const isMobile = window.innerWidth < 768;  // checking if the user is using mobile or not for animation purposes

  const variants = {
    hidden: {
      y: 400,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    }
  }

  return (
    <motion.div variants={!isMobile ? variants : {}} className='ReviewCard'> 
    
    {/* only showing the animations on desktop view by using isMobile variable*/}  

      <div className="imgName">
        <img src={item.img} alt="" />
        <div className="name">
          <h1>{item.name}</h1>
          <p>{item.work}</p>
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
      </div>
      <p>{item.text}</p>
    </motion.div>
  )
}

export default ReviewCard