import React from 'react'
import '../../Styles/HowItWorks/HowItWorksCards.scss'
import { motion } from 'framer-motion'

const HowItWorksCards = ({ item }) => {

  const isMobile = window.innerWidth < 768;  // checking if the user is using mobile or not for animation purposes

  const variants = {
    hidden: {
      y: -400,
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
    <motion.div className='HowItWorksCards' variants={!isMobile ? variants : {}} viewport={{ once: true }} >
      
      {/* only showing the animations on desktop view by using isMobile variable*/}

      <img src={item.img} alt="" />
      <h2>{item.type}</h2>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </motion.div>
  )
}

export default HowItWorksCards