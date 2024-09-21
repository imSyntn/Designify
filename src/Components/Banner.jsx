import React from 'react'
import '../Styles/Banner.scss'
import Button from './Button'

const Banner = () => {
    return (
        <div className="bannerWrapper">
            <div className='Banner'>
                <h2>Are you a large business looking<br />for custom solutions?</h2>
                <Button text={'Talk to sales'} />
            </div>
        </div>
    )
}

export default Banner