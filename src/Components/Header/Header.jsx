import React from 'react'
import '../../Styles/Header/Header.scss'
import Button from '../Button'
import Navigation from './Navigation'

const buttonArray = [{
    text: 'Log in',
    style: {
        border: '0.5px solid #b7b7b7',
        height: '36px'
    }
}, {
    text: 'Sign up',
    style: {
        backgroundColor: '#39B75D',
        color: 'white',
        height: '36px'
    }
}]

const Header = () => {
    return (
        <header>
            <h1>Designify</h1>
            <Navigation />
            <div className="btns">
                {
                    buttonArray.map(item => (
                        <Button key={item.text} text={item.text} style={item.style} />
                    ))
                }
            </div>
        </header>
    )
}

export default Header