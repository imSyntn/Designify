import React from 'react'
import '../Styles/Button.scss'

const Button = ({classValue = '', text, Icon, style={}}) => {
  return (
    <button className={`Button ${classValue}`} style={style}>
        {Icon && <Icon />}
        {text}
    </button>
  )
}

export default Button