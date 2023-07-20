import React from 'react'
import './UnderstandingInput.css'
import Delete from '../Icons/Delete'

const Index = ({ value, onChange, onDelete }) => {
  return (
    <div className='UnderstandingInput'>
        <input type="text" value={value} onChange={onChange} placeholder='Understanding' />
        <div className="line"/>
        <button onClick={onDelete}>
            <Delete width="16px" height="16px" color="#f59e0b" />
        </button>
    </div>
  )
}

export default Index