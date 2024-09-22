import React, { useRef } from 'react'
import '../../Styles/HowItWorks/HowItWorks.scss'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import HowItWorksCards from './HowItWorksCards';


const workingCards = [{
  img: 'https://printify.com/pfh/assets/legacy/custom-products.png',
  type: 'Create',
  name: 'custom products',
  description: ' Easily add your designs to a wide range of products using our free tools '
}, {
  img: '	https://printify.com/pfh/assets/legacy/your-products.png',
  type: 'Sell',
  name: 'on your terms',
  description: 'You choose the products, sale price, and where to sell'
}, {
  img: 'https://printify.com/pfh/assets/legacy/fullfillment.png',
  type: 'We handle',
  name: 'fulfillment',
  description: ' Once an order is placed, we automatically handle all the printing and delivery logistics '
}]

const HowItWorks = () => {

  const sliderRef = useRef(null)

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 360;
  }
  const slideRight = () => {
    sliderRef.current.scrollLeft += 360;
  }

  return (
    <div className='HowItWorks'>
      <div className="textCont">
        <div className="imgSvg"></div>
        <div className="text">
          <h1>Easily add your design to a wide range of products</h1>
          <p>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
          <p className="Products">All products <FaArrowRight /></p>
        </div>
      </div>

      <div className="bottomDetails" ref={sliderRef}>
        {
          workingCards.map(item => (
            <HowItWorksCards key={item.type} item={item} />
          ))
        }
      </div>
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