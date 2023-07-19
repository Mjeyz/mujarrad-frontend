import React from 'react'
import './Button.css'

const Index = ({ text , onClick, type }) => {
  return (
    <button className={'button ' + (type == "primary" ? "primary" : "secondary")} onClick={onClick}>
        {text}
    </button>
  )
}

export default Index