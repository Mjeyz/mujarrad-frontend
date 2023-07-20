import React from 'react'

const Document = ({ color, height, width}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 44 44" fill="none">
        <g clipPath="url(#clip0_4_1262)">
            <path d="M16.5 9.16663H12.8333C11.8609 9.16663 10.9282 9.55293 10.2406 10.2406C9.55297 10.9282 9.16666 11.8608 9.16666 12.8333V34.8333C9.16666 35.8058 9.55297 36.7384 10.2406 37.426C10.9282 38.1137 11.8609 38.5 12.8333 38.5H31.1667C32.1391 38.5 33.0718 38.1137 33.7594 37.426C34.447 36.7384 34.8333 35.8058 34.8333 34.8333V12.8333C34.8333 11.8608 34.447 10.9282 33.7594 10.2406C33.0718 9.55293 32.1391 9.16663 31.1667 9.16663H27.5" stroke={color} strokeWidth="2.75" strokLinecap="round" strokLinejoin="round"/>
            <path d="M16.5 9.16667C16.5 8.19421 16.8863 7.26158 17.5739 6.57394C18.2616 5.88631 19.1942 5.5 20.1667 5.5H23.8333C24.8058 5.5 25.7384 5.88631 26.4261 6.57394C27.1137 7.26158 27.5 8.19421 27.5 9.16667C27.5 10.1391 27.1137 11.0718 26.4261 11.7594C25.7384 12.447 24.8058 12.8333 23.8333 12.8333H20.1667C19.1942 12.8333 18.2616 12.447 17.5739 11.7594C16.8863 11.0718 16.5 10.1391 16.5 9.16667Z" stroke={color} strokeWidth="2.75" strokLinecap="round" strokLinejoin="round"/>
            <path d="M16.5 22H27.5" stroke={color} strokeWidth="2.75" strokLinecap="round" strokLinejoin="round"/>
            <path d="M16.5 29.3334H27.5" stroke={color} strokeWidth="2.75" strokLinecap="round" strokLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_4_1262">
                <rect width={width} height={height} fill="white"/>
            </clipPath>
        </defs>
        </svg>
  )
}

export default Document