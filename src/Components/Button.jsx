import React from 'react'
import '../Styles/Button.scss'

const Button = ({classValue = '', hover, text, Icon, style={}}) => {

  // destructuring props
  //  classValue => for adding extra css, hover=> for hover animation if 'green' then applied hover animation for green button. If white then applied hover animation for white button
  //text => for text inside button
  // Style => for custom inline style 
  // Icon => for showing icons

  return (
    <button className={`Button ${classValue + ' ' + hover}`} style={style}>
        {Icon && <Icon />} {/* If Icon is padded from parent then only show it */}
        {text}
    </button>
  )
}

export default Button