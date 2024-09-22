import { useRef, useState } from 'react'
import '../../Styles/Reviews/Reviews.scss'
import ReviewCard from './ReviewCard'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const reviewArray = [{
    name: 'Robert A. Voltaire',
    work: ' Store link ',
    img: 'https://printify.com/pfh/media/robert-voltaire-RIZV7QXV.png',
    text: ' Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! '
}, {
    name: 'Quinten Barney',
    work: ' Etsy Merchant ',
    img: 'https://printify.com/pfh/media/quinten-barney-CHC7B3FG.png',
    text: " We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better. "
}, {
    name: 'Nikki',
    work: ' Store link ',
    img: 'https://printify.com/pfh/media/nikki-TJP4NANB.png',
    text: " Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze. "
}, {
    name: 'Spencer, Brett, and Kyle',
    work: ' Store link ',
    img: 'https://printify.com/pfh/media/spencer-brett-kyle-NLHTAZDT.png',
    text: ' Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly. '
}, {
    name: 'April Showers',
    work: 'Store link ',
    img: 'https://printify.com/pfh/media/april-showers-BCJ7SD2U.jpeg',
    text: ' I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business. '
},]

const Reviews = () => {

    const [sliderArrow, setSliderArrow] = useState({
        left: false,
        right: true
    })

    const sliderRef = useRef(null)

    const checkWidth = () => {
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
    }

    const debounced = (func, time) => {
        let timer;
        return () => {
            clearTimeout(timer)
            timer = setTimeout(func)
        }
    }

    const slideLeft = () => {
        sliderRef.current.scrollLeft -= 360;
        debounced(checkWidth, 300)()
    }
    const slideRight = () => {
        sliderRef.current.scrollLeft += 360;
        debounced(checkWidth, 300)()
    }



    return (
        <div className='Reviews'>
            <div className="text">
                <h1>Trusted by over 8M sellers around the world</h1>
                <p>
                    Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
                </p>
            </div>
            <div className="sliderDiv" ref={sliderRef}>
                {/* <div className="sliderCont"> */}
                {
                    reviewArray.map(item => (
                        <ReviewCard key={item.name} item={item} />
                    ))
                }
                {/* </div> */}
            </div>
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