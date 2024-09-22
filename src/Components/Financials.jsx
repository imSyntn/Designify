import React from 'react'
import '../Styles/Financials.scss'
import Button from './Button'

const Financials = () => {
    return (
        <div className='Financials'>
            <div className="financialData">
                {/* <div className="cont"> */}
                <h1>Make Money, Risk-Free</h1>
                <p>You pay for fulfillment only when you make a sale</p>
                <div className="total">
                    <p>You sell a t-shirt <span>$ 30</span></p>
                    <p>You pay for its production <span>$ 12</span></p>
                    <h3>Your profit <span>$ 18</span></h3>
                </div>
                <Button style={{ backgroundColor: '#38b75c', color: 'white' }} text={'Start selling'} />
                <p className='bottom-text'>100% Free to use · 900+ Products · Largest print network</p>
                {/* </div> */}
            </div>
            <img src="../../finance.svg" alt="" />
        </div>
    )
}

export default Financials