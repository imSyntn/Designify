import React from 'react'
import '../../Styles/ConnectYourStore/ConnectYourStore.scss'

const storeImages = [{
    name: 'presta',
    img: 'https://printify.com/pfh/media/presta-54F6AYUU.svg'
}, {
    name: 'wix',
    img: 'https://printify.com/pfh/media/wix-MWZCZDTE.svg'
}, {
    name: 'woo',
    img: '	https://printify.com/pfh/media/woo-PGFAG65X.svg'
}, {
    name: 'squarespace',
    img: 'https://printify.com/pfh/media/squarespace-FIBF2RIF.svg'
}, {
    name: 'shopify',
    img: 'https://printify.com/pfh/media/shopify-3NAPXPBF.svg'
}, {
    name: 'and-more',
    img: 'https://printify.com/pfh/media/more-integration-4S3FHLQZ.svg'
}, {
    name: 'etsy',
    img: 'https://printify.com/pfh/media/etsy-MXXFYORZ.svg'
}, {
    name: 'API'
}, {
    name: 'BigCommerce',
    img: 'https://printify.com/pfh/media/big-commerce-EGSGKPYX.svg'
}, {
    name: 'main',
    img: 'https://printify.com/pfh/media/printify-E3TBSF5R.svg'
}]

const ConnectYourStore = () => {
    return (
        <div className='ConnectYourStore'>
            <h1>Connect your store</h1>
            <p>Designify easily integrates with major e-commerce platforms and marketplaces</p>
            <div className="storeOptions">
                {
                    storeImages.map(item => (
                        <div className={`card ${item.name}`} key={item.name}>
                            {
                                item.img ? (
                                    <img src={item.img} alt="" />
                                ) : (
                                    <h1>{item.name}</h1>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ConnectYourStore