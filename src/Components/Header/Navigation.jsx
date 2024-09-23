import React from 'react'
import '../../Styles/Header/Navigation.scss'
import Dropdown from './Dropdown'

const Navigation = ({navArray}) => {
  return (
    <ul className='Navigation'>
        {
            navArray.map(item => (
                !item.child ? (
                    <li key={item.text}>{item.text}</li> /* if the item has no nested child then render only the item */
                ) : (
                    <Dropdown key={item.text} data={item} /> /* if the item has nested child then render the nested childs */
                )
            ))
        }
    </ul>
  )
}

export default Navigation