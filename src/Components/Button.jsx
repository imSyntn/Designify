import React from 'react'
import '../Styles/Button.scss'

const Button = ({classValue = '', hover, text, Icon, style={}}) => {
  return (
    <button className={`Button ${classValue + ' ' + hover}`} style={style}>
        {Icon && <Icon />}
        {text}
    </button>
  )
}

export default Button