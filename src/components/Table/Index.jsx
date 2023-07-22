import React from 'react'
import './Table.css'
import { useNavigate } from 'react-router-dom';

const Index = ({headings, tdData, isHomePage}) => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/stats/${id}`)
    }
  return (
    <table className='data-table'>
       <thead>
            <tr>
                {headings.map((heading, index) => (
                    <th key={index}>{heading}</th>
                ))}
            </tr>
        </thead> 
        <tbody>
            {tdData.map((td, index) => (
                <tr key={index} onClick={isHomePage ? () => handleClick(td.id) : null} className={isHomePage ? 'clickable' : null}>
                    {Object.keys(td)
                        .filter((key) => key !== 'id')
                        .map((key) => (
                            <td key={key}>{td[key]}</td>
                        ))}
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Index