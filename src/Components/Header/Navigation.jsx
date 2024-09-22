import React from 'react'
import '../../Styles/Header/Navigation.scss'
import Dropdown from './Dropdown'

const Navigation = ({navArray}) => {
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