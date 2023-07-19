import React from 'react'

const Delete = ({ color, height, width }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 17" fill="none">
        <g clipPath="url(#clip0_4_1095)">
            <path d="M12 4.5L4 12.5" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 4.5L12 12.5" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_4_1095">
                <rect width={width} height={height} fill="white" transform="translate(0 0.5)"/>
            </clipPath>
        </defs>
    </svg>
  )
}

export default Delete