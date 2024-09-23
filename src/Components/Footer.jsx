import React from 'react'
import '../Styles/Footer.scss'
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";

import { footerNavListArr } from './Data';  // to make the code more readable I put all the mock data inside a file

const iconArray = [  // array of icons to map it inside jsx so that I have to write less
    TiSocialFacebook,
    FaInstagram,
    FaLinkedinIn,
    BsTwitterX,
    TiSocialYoutube,
    FaTiktok,
    GrReddit
]



const Footer = () => {
    return (
        <>
            <footer>
                <div className="social">
                    <h1>Designify</h1>
                    <div className="links">
                        {
                            iconArray.map((Item, index) => (
                                <div className="circle" key={index}>
                                    <Item />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="navigation">
                    {
                        footerNavListArr.map(item => (
                            <div className="navBar" key={item.name}>
                                <h3>{item.name}</h3>
                                {
                                    item.contents.map(item => (
                                        <p key={item}>{item}</p>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </footer>
            <div className="copyright">
                <div className="right">
                    <p>Intellectual Property Policy</p>
                    <p>Terms of Service </p>
                    <p>Privacy Policy</p>
                    <p>Security</p>
                </div>
                <p>© 2024 Printify, Inc. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer