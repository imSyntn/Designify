import React from 'react'
import '../Styles/Loader.scss'

const Loader = () => {
  return (
    <div className='Loader'>
        <h1>Designify</h1>
        <div className="loaderDots">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
        </div>
    </div>
  )
}

export default Loader