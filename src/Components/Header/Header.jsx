import { useState } from 'react'
import '../../Styles/Header/Header.scss'
import Button from '../Button'
import Navigation from './Navigation'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const buttonArray = [{
    text: 'Log in',
    style: {
        border: '0.5px solid #b7b7b7',
        height: '36px'
    },
    hover: 'white'
}, {
    text: 'Sign up',
    style: {
        backgroundColor: '#39B75D',
        color: 'white',
        height: '36px'
    },
    hover: 'green'
}]


const navArray = [{
    text: 'Catalog'
}, {
    text: 'How it works',
    child: ['How Designify Works', 'Print On Demand', 'Designify Quality Promise', 'What to Sell?']
}, {
    text: 'Pricing'
}, {
    text: 'Blog'
}, {
    text: 'Services',
    child: ['Designify Studio', 'Designify Express Delivery', 'Transfer Products', 'Order in Bulk', 'Experts Program']
}, {
    text: 'Use-cases',
    child: ['Merch for Fans', 'Merch for eCommerce', 'Merch for Enterprises', 'Grow Your Store']
}, {
    text: 'Need help?',
    child: ['Help Center', 'Contacts', 'My Requests']
}]

const Header = () => {

    const [showNav, setShowNav] = useState(false)

    return (
        <header>
            <FaBars onClick={() => setShowNav(true)} />
            <h1>Designify</h1>
            <Navigation navArray={navArray} />


            <div className={`navContainerMobileView ${showNav ? 'display' : ''}`}>
                <div className="navText">
                    <h1>Menu</h1>
                    <RxCross2 onClick={() => setShowNav(false)} />
                </div>
                <Navigation navArray={navArray} />
            </div>

            <div className="btns">
                {
                    buttonArray.map(item => (
                        <Button key={item.text} text={item.text} hover={item.hover} style={item.style} />
                    ))
                }
            </div>
        </header>
    )
}

export default Header