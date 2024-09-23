import React from 'react'
import '../Styles/HeroSection.scss'
import { FaCheck } from "react-icons/fa6";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import Button from './Button';

import { pros } from './Data';  // to make the code more readable I put all the mock data inside a file


const HeroSection = () => {
    return (
        <section className='HeroSection'>
            <div className="banner">
                <div className="banner-item-left">
                    <h1>Create and sell custom products</h1>
                    {
                        pros.map(item => (
                            <p key={item}><FaCheck /> {item}</p>
                        ))
                    }
                    <div className="btns">
                        <Button classValue='leftBtn' text={'Start for free'} hover={'green'} />
                        <Button classValue='rightBtn' Icon={MdOutlinePlayCircleOutline} text={'How it works?'} hover={'white'} />
                    </div>
                    <p className='bottom-p'>Trusted by over 8M sellers around the world</p>
                </div>
                <img className="banner-item-right" src="../../../hero.svg" alt="" />
            </div>
        </section>
    )
}

export default HeroSection