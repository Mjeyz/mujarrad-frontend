import React from 'react'

const Text = ({color, height, width}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 44 44" fill="none">
        <g clipPath="url(#clip0_191_3)">
            <path d="M5.5 34.8333V15.5833C5.5 13.8815 6.17604 12.2494 7.3794 11.046C8.58276 9.84267 10.2149 9.16663 11.9167 9.16663C13.6185 9.16663 15.2506 9.84267 16.4539 11.046C17.6573 12.2494 18.3333 13.8815 18.3333 15.5833V34.8333" stroke={color} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.5 23.8334H18.3333" stroke={color} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M25.6667 34.8333V15.5833C25.6667 13.8815 26.3427 12.2494 27.5461 11.046C28.7494 9.84267 30.3815 9.16663 32.0833 9.16663C33.7851 9.16663 35.4172 9.84267 36.6206 11.046C37.824 12.2494 38.5 13.8815 38.5 15.5833V34.8333" stroke={color} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M25.6667 23.8334H38.5" stroke={color} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_191_3">
                <rect width={width} height={height} fill="white"/>
            </clipPath>
        </defs>
    </svg>
  )
}

export default Text