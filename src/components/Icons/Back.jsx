import React from 'react'

const Back = ({ width, height, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_4_527)">
            <path d="M5 12H19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12L9 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12L9 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_4_527">
            <rect width={width} height={height} fill="white"/>
            </clipPath>
        </defs>
    </svg>
  )
}

export default Back