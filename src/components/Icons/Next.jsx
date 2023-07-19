import React from 'react'

const Next = ({ width, height, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_4_551)">
            <path d="M4.99988 12H18.9999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.9999 16L18.9999 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.9999 8L18.9999 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_4_527">
            <rect width={width} height={height} fill="white"/>
            </clipPath>
        </defs>
    </svg>
  )
}

export default Next