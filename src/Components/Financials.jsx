import React from 'react'
import '../Styles/Financials.scss'
import Button from './Button'
import { motion } from 'framer-motion'

const Financials = () => {

    const isMobile = window.innerWidth < 768;   // checking if the user is using mobile or not for animation purposes

    const containerVarient = {
        hidden: {
            x: 500,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.3, // using staggerChildren so that the child will animate one by one
            }
        }
    }

    const childVarient = {
        hidden: {
            y: 500,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <div className='Financials'>

            {/* only showing the animations on desktop view by using isMobile variable*/}

            <motion.div className="financialData" variants={!isMobile ? containerVarient : {}} initial='hidden' whileInView='visible' viewport={{ once: true }} >

                <h1>Make Money, Risk-Free</h1>
                <p>You pay for fulfillment only when you make a sale</p>
                <motion.div variants={!isMobile ? childVarient : {}} className="total" viewport={{ once: true }}>
                    <p>You sell a t-shirt <span>$ 30</span></p>
                    <p>You pay for its production <span>$ 12</span></p>
                    <h3>Your profit <span>$ 18</span></h3>
                </motion.div>
                <Button style={{ backgroundColor: '#38b75c', color: 'white' }} text={'Start selling'} />
                <p className='bottom-text'>100% Free to use · 900+ Products · Largest print network</p>

            </motion.div>
            <img src="../../finance.svg" alt="" />
        </div>
    )
}

export default Financials