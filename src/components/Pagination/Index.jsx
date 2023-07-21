import React from 'react';
import './Pagination.css';
import Back from '../Icons/Back';
import Next from '../Icons/Next';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    let pages = [];
    if (totalPages <= 5) {
        pages = Array.from({length: totalPages}, (_, i) => i + 1);
    } else {
        
        pages = [1, currentPage - 1, currentPage, currentPage + 1, totalPages].filter((page, index, self) => self.indexOf(page) === index && page >= 1 && page <= totalPages);
    }

    return (
        <div className='pagination'>
            <button 
                className='paginationButton' 
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                // onClick={() => console.log("Hello yodha")}
                disabled={currentPage === 1}
            >
                <Back height="24px" width="24px" color="#0F172A"/>
            </button>

            {pages.map((page, index) => (
                <button 
                    key={index} 
                    className={'paginationLink ' + (currentPage === page ? 'paginationActive' : '')}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button 
                className='paginationButton' 
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
            >
                <Next height="24px" width="24px" color="#0F172A"/>
            </button>
        </div>
    );
}

export default Pagination;