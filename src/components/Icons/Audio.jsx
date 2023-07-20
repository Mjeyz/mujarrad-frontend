import React from 'react'

const Audio = ({ color, height, width}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 44 44" fill="none">
        <g clip-path="url(#clip0_191_11)">
            <path d="M16.5 9.16669C16.5 7.708 17.0795 6.30905 18.1109 5.2776C19.1424 4.24615 20.5413 3.66669 22 3.66669C23.4587 3.66669 24.8576 4.24615 25.8891 5.2776C26.9205 6.30905 27.5 7.708 27.5 9.16669V18.3334C27.5 19.792 26.9205 21.191 25.8891 22.2224C24.8576 23.2539 23.4587 23.8334 22 23.8334C20.5413 23.8334 19.1424 23.2539 18.1109 22.2224C17.0795 21.191 16.5 19.792 16.5 18.3334V9.16669Z" stroke={color} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.16666 18.3333C9.16666 21.7369 10.5187 25.0011 12.9255 27.4078C15.3322 29.8146 18.5964 31.1666 22 31.1666C25.4036 31.1666 28.6678 29.8146 31.0745 27.4078C33.4813 25.0011 34.8333 21.7369 34.8333 18.3333" stroke={color} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.6667 38.5H29.3333" stroke={color} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 31.1667V38.5" stroke={color} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_191_11">
                <rect width={width} height={height} fill="white"/>
            </clipPath>
        </defs>
        </svg>
  )
}

export default Audio