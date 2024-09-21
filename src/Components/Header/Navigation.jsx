import React from 'react'
import '../../Styles/Header/Navigation.scss'
import Dropdown from './Dropdown'

const navArray = [{
    text: 'Catalog'
}, {
    text: 'How it works',
    child: ['How Designify Works', 'Print On Demand', 'Designify Quality Promise', 'What to Sell?']
}, {
    text: 'Pricing'
}, {
    text: 'Blog'
},{
    text: 'Services',
    child: ['Designify Studio', 'Designify Express Delivery', 'Transfer Products', 'Order in Bulk', 'Experts Program']
}, {
    text: 'Use-cases',
    child: ['Merch for Fans', 'Merch for eCommerce', 'Merch for Enterprises', 'Grow Your Store']
}, {
    text: 'Need help?',
    child: ['Help Center', 'Contacts', 'My Requests']
}]

const Navigation = () => {
  return (
    <ul className='Navigation'>
        {
            navArray.map(item => (
                !item.child ? (
                    <li key={item.text}>{item.text}</li>
                ) : (
                    <Dropdown key={item.text} data={item} />
                )
            ))
        }
    </ul>
  )
}

export default Navigation