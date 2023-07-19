import React from 'react'
import './Pagination.css'
import Back from '../Icons/Back'
import Next from '../Icons/Next'

const Index = ({ pages, currentPage, onPageChange }) => {
    const cpage = 1
    const pagipages = [1, 2, 3, '...', 20];
    let output = "";
  return (
    <div className='pagination'>
        <button className='paginationButton'><Back height="24px" width="24px" color="#0F172A"/></button>
        {pagipages.map((page, index) => (
            <button key={index} className={'paginationLink ' + (cpage === page ? 'paginationActive' : '')}            onClick={() => onPageChange(page)}>{page}</button>
        ))}
        <button className='paginationButton'><Next height="24px" width="24px" color="#0F172A"/></button>
    </div>
  )
}

export default Index