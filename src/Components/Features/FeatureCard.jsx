import React from 'react'
import '../../Styles/Features/FeatureCard.scss'

const FeatureCard = ({source, heading, description}) => {
    console.log(source)
  return (
    <div className='FeatureCard'>
        <img src={source} alt="" />
        <h2>{heading}</h2>
        <p>{description}</p>
    </div>
  )
}

export default FeatureCard