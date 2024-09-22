import React from 'react'
import '../Styles/HeroSection.scss'
import { FaCheck } from "react-icons/fa6";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import Button from './Button';

const pros = ['100% Free to use', '900+ High-Quality Products', 'Largest global print network']

// const style = []

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
                        <Button classValue='leftBtn' text={'Start for free'} />
                        <Button classValue='rightBtn' Icon={MdOutlinePlayCircleOutline} text={'How it works?'} />
                    </div>
                    <p className='bottom-p'>Trusted by over 8M sellers around the world</p>
                </div>
                <img className="banner-item-right" src="../../../hero.svg" alt="" />
            </div>
        </section>
    )
}

export default HeroSection