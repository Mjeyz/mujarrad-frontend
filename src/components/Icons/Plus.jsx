import React from 'react'

const Plus = ({width, height, color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_146_69)">
            <path d="M12 5V19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12H19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_146_69">
                <rect width={width} height={height} fill="white"/>
            </clipPath>
        </defs>
    </svg>
  )
}

export default Plus