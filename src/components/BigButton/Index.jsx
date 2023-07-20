import React from 'react'
import './BigButton.css'
const Index = ({ text , onClick }) => {
  return (
    <button className="bigButton" onClick={onClick}>
        {text}
    </button>
  )
}

export default Index