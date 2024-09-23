import { useRef, useState } from 'react'
import '../../Styles/Reviews/Reviews.scss'
import ReviewCard from './ReviewCard'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { containerVariants } from '../HowItWorks/HowItWorks';

import { reviewArray } from '../Data';  // to make the code more readable I put all the mock data inside a file

const Reviews = () => {

    const isMobile = window.innerWidth < 768;   // checking if the user is using mobile or not for animation purposes

    const [sliderArrow, setSliderArrow] = useState({ // using this state to show and hide arrows
        left: false,
        right: true
    })

    const sliderRef = useRef(null) // this hook will help to slide a container dynamically by giving us the access of the specific container

    const checkScrollPosition = () => {  // using this function for checking the current scroll position
        setTimeout(() => {
            if (sliderRef.current.scrollLeft == 0) {
                setSliderArrow({
                    left: false,
                    right: true
                })
            } else if (0 < sliderRef.current.scrollLeft < sliderRef.current.scrollWidth) {
                setSliderArrow({
                    left: true,
                    right: true
                })
            } else {
                setSliderArrow({
                    left: true,
                    right: false
                })
            }
        }, 300)
    }

    const slideLeft = () => {  // function to slide a container in left
        sliderRef.current.scrollLeft -= 360;
        checkScrollPosition()
    }
    const slideRight = () => {  // function to slide a container in right
        sliderRef.current.scrollLeft += 360;
        checkScrollPosition()
    }

    const textVariant = {  // for animation purposes
        hidden: {
            x: -300,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.3
            }
        }
    }


    return (
        <div className='Reviews'>
            <div className="text">
                <h1>Trusted by over 8M sellers around the world</h1>

                {/* only showing the animations on desktop view by using isMobile variable*/}

                <motion.p variants={!isMobile ? textVariant : {}} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                    Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
                </motion.p>
            </div>
            <motion.div className="sliderDiv" variants={!isMobile ? containerVariants : {}} initial='hidden' whileInView='visible' viewport={{ once: true }} ref={sliderRef}>
                {
                    reviewArray.map(item => (
                        <ReviewCard key={item.name} item={item} />
                    ))
                }
            </motion.div>
            <div className="slideBtn">
                <div className="left" onClick={slideLeft}>
                    <FaChevronLeft style={!sliderArrow.left ? { opacity: 0.3 } : {}} />
                </div>
                <div className="right" onClick={slideRight}>
                    <FaChevronRight style={!sliderArrow.right ? { opacity: 0.3 } : {}} />
                </div>
            </div>
        </div>
    )
}

export default Reviews