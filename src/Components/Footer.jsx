import React from 'react'
import '../Styles/Footer.scss'
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";

const iconArray = [
    TiSocialFacebook,
    FaInstagram,
    FaLinkedinIn,
    BsTwitterX,
    TiSocialYoutube,
    FaTiktok,
    GrReddit
]

const navListArr = [{
    name: 'Integrations',
    contents: [
        'Shopify',
        'Etsy',
        'eBay',
        'Amazon',
        'TikTok Shop',
        'PrestaShop',
        'BigCommerce',
        'Wix',
        'WooCommerce',
        'Squarespace',
        'Printify API',
        'Printify Pop-Up Store',
        'Shutterstock',
    ]
}, {
    name: 'Discover',
    contents: [
        'Blog',
        'Guides',
        'Products',
        'Etsy print-on-demand',
        'Shopify print-on-demand',
        'Woocommerce print-on-demand',
        'Wix print-on-demand',
        'Squarespace print-on-demand',
        'Make Your Own Shirt',
        'Brands',
        'Pricing',
        'Shipping Rates',
        'Mockup Generator',
    ]
}, {
    name: 'Start selling',
    contents: [
        'Custom T-shirts',
        'Custom Hoodies',
        'Custom Mugs',
        'Custom Socks',
        'Custom Backpacks',
        'Custom Branding',
        'Sell on Etsy',
        'Sell on Social Media',
        'Free T-shirt Designs',
        'Custom Products',
        'Custom All-Over-Print Hoodies',
        'Start a Clothing Line',
        'Start POD Business',
        'Bulk Orders',
        'Transfering To Printify',
    ]
}, {
    name: 'Printify',
    contents: [
        'Print on Demand',
        'Print Providers',
        'Experts Program',
        'Printify Express Delivery',
        'Become a Partner',
        'About',
        'Printify Quality Promise',
        'Jobs',
        'Webinars',
        'Printing Profits Podcast',
        'Contact Us',
        'Affiliate',
        'Contact Sales',
        'POD Glossary',
        'Network Fulfillment Status',
        'Merchant Protection',
        'Security',
        'Sitemap',
    ]
},]

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
                        navListArr.map(item => (
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