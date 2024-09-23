import React from 'react'
import '../../Styles/Features/Features.scss'
import FeatureCard from './FeatureCard'

import { FeaturesArray } from '../Data'  // to make the code more readable I put all the mock data inside a file

const Features = () => {
  return (
    <div className='Features'>
      {
        FeaturesArray.map(item => (
          <FeatureCard key={item.heading} source={item.img} heading={item.heading} description={item.description} />
        ))
      }
    </div>
  )
}

export default Features