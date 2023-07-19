import React from 'react'
import MainLayout from '../../Layouts/MainLayout';
import concepts, { conceptHeadings } from '../../Data/concepts'
import Table from '../../Components/Table'
import Pagination from '../../Components/Pagination'

const Index = () => {
  const [currentPaginationPage, setCurrentPaginationPage] = React.useState(1)
  const totalPaginationPages = 20;
  const handlePaginationPageChange = (page) => {
    setCurrentPaginationPage(page)
  }
  return (
    <MainLayout>
        <h1>Concept Inventory</h1>
        <Table headings={conceptHeadings} tdData={concepts} />
        <Pagination pages={totalPaginationPages} currentPaginationPage={currentPaginationPage} onPageChange={handlePaginationPageChange}/>
    </MainLayout>
  )
}

export default Index