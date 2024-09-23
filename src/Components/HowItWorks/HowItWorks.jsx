import React, { useRef } from 'react'
import '../../Styles/HowItWorks/HowItWorks.scss'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import HowItWorksCards from './HowItWorksCards';
import { motion } from 'framer-motion'

import { workingCards } from '../Data';

export const containerVariants = {    //  Exporting it so that I don't have to write it again in Reviews component
  hidden: {
    y: 0
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      staggerChildren: 0.3 // using staggerChildren so that the child will animate one by one
    }
  }
}


const HowItWorks = () => {

  const isMobile = window.innerWidth < 768;  // checking if the user is using mobile or not for animation purposes

  const sliderRef = useRef(null)  // this hook will help to slide a container dynamically by giving us the access of the specific container

  const slideLeft = () => {  // function to slide a container in left
    sliderRef.current.scrollLeft -= 360;
  }
  const slideRight = () => {  // function to slide a container in right
    sliderRef.current.scrollLeft += 360;
  }


  return (
    <div className='HowItWorks'>
      <div className="textCont">
        <div className="imgSvg">

          {/* only showing the animations on desktop view by using isMobile variable*/}

          <motion.img initial={!isMobile ? { y: 300, opacity: 0 } : {}} whileInView={!isMobile ? {
            y: 0, opacity: 1, transition: {
              duration: 0.5
            }
          } : {}} viewport={{ once: true }} className='svg' src="../../../shirt.svg" alt="" />
        </div>

        <motion.div initial={!isMobile ? { x: -400, opacity: 0 } : {}} whileInView={!isMobile ? {
          x: 0, opacity: 1, transition: {
            duration: 0.5
          }
        } : {}} viewport={{ once: true }} className="text">
          <h1>Easily add your design to a wide range of products</h1>
          <p>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
          <p className="Products">All products <FaArrowRight /></p>
        </motion.div>
      </div>

      <motion.div variants={!isMobile ? containerVariants : {}} initial='hidden' whileInView='visible'
        viewport={{ once: true }} className="bottomDetails" ref={sliderRef}>
        {
          workingCards.map(item => (
            <HowItWorksCards key={item.type} item={item} />
          ))
        }
      </motion.div>
      <div className="slideBtn">
        <div className="left" onClick={slideLeft}>
          <FaChevronLeft />
        </div>
        <div className="right" onClick={slideRight}>
          <FaChevronRight />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks