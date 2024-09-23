import React from 'react'
import '../Styles/ConnectYourStore.scss'
import { motion } from 'framer-motion'

import { storeImages } from './Data' // to make the code more readable I put all the mock data inside a file

const ConnectYourStore = () => {

    const containerVarient = { // for animation purposes
        hidden: {
            scale: 0,
        },
        visible: {
            scale: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <div className='ConnectYourStore'>
            <h1>Connect your store</h1>
            <p>Designify easily integrates with major e-commerce platforms and marketplaces</p>
            <motion.div className="storeOptions" variants={containerVarient} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                {
                    storeImages.map(item => (
                        <div className={`card ${item.name}`} key={item.name}>
                            {
                                item.img ? (
                                    <img src={item.img} alt="" />
                                ) : (
                                    <h1>{item.name}</h1>
                                )
                            }
                        </div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default ConnectYourStore