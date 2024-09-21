import React from 'react'
import '../../Styles/Features/Features.scss'
import FeatureCard from './FeatureCard'

const FeaturesArray = [{
  img: '	https://printify.com/pfh/assets/legacy/higher-profits.svg',
  heading: 'Higher Profits',
  description: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.'
},{
  img: 'https://printify.com/pfh/assets/legacy/robust-scaling.svg',
  heading: 'Robust Scaling',
  description: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.'
},{
  img: '	https://printify.com/pfh/assets/legacy/best-selection.svg',
  heading: 'Best Selection',
  description: 'With 900+ products and top quality brands, you can choose the best products for your business.'
}]

const Features = () => {
  return (
    <div className='Features'>
      {
        FeaturesArray.map(item=> (
          <FeatureCard key={item.heading} source={item.img} heading={item.heading} description={item.description} />
        ))
      }
    </div>
  )
}

export default Features