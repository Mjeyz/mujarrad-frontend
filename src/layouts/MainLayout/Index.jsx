import React from 'react'
import Sidebar from '../../Components/Sidebar'
const Index = ({ children }) => {
  return (
    <>
      <Sidebar/>
      <main className='main-container'>
        {children}
      </main>
      
    </>
  )
}

export default Index