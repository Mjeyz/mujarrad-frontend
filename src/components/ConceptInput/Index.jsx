import React from 'react'
import './ConceptInput.css'
const Index = ({ label, type = 'text', name, value, onChange, placeholder }) => {
  return (
    <div className='ConceptInput'>
      {label && <label className='ConceptInput-label' htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='ConceptInput-input'
      />
    </div>
  )
}

export default Index