import React from 'react'
import MainLayout from '../../Layouts/MainLayout';
import { conceptHeadings } from '../../Data/concepts'
import Table from '../../Components/Table'
import Pagination from '../../Components/Pagination'
import ConceptContext from '../../context/ConceptContext';

const Index = () => {
  const { conceptsData, currentPaginationPage, totalPages, handlePaginationPageChange } = React.useContext(ConceptContext);
  return (
    <MainLayout>
        <h1>Concept Inventory</h1>
        <Table headings={conceptHeadings} tdData={conceptsData} isHomePage={true}/>
        <Pagination totalPages={totalPages} currentPage={currentPaginationPage} onPageChange={handlePaginationPageChange}/>
    </MainLayout>
  )
}

export default Index