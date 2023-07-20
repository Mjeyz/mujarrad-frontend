import React from 'react'
import './Card.css'
const Index = ({ icon, title, isSelected, index, onSelectionChange}) => {
    const handleCardClick = () => {
        const newSelectedState = !isSelected;
        onSelectionChange(index, newSelectedState);
      };
    return (
        <div className={'card' + (isSelected ? ' selected' : '')} onClick={handleCardClick}>
            <div className={'icon' + (isSelected ? ' icoun-selected' : '')}>
                {icon}
            </div>
            <h3 className='title'>{title}</h3>
        </div>
    )
}

export default Index