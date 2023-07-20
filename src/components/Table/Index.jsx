import React from 'react'
import './Table.css'
import { useNavigate } from 'react-router-dom';

const Index = ({headings, tdData}) => {
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
            {tdData.map((td) => (
                <tr key={td.id} onClick={() => handleClick(td.id)}>
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