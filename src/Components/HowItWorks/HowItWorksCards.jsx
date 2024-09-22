import React from 'react'
import '../../Styles/HowItWorks/HowItWorksCards.scss'


const HowItWorksCards = ({item}) => {
  return (
    <div className='HowItWorksCards'>
        <img src={item.img} alt="" />
        <h2>{item.type}</h2>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
    </div>
  )
}

export default HowItWorksCards