import React from 'react'
import MainLayout from '../../Layouts/MainLayout';
import concepts, { conceptHeadings } from '../../Data/concepts'
import Table from '../../Components/Table'
import Pagination from '../../Components/Pagination'
import ConceptApi from '../../Utils/ConceptApi';

const Index = () => {
  const [currentPaginationPage, setCurrentPaginationPage] = React.useState(1)
  const [totalPages, setTotalPages] = React.useState(0)
  const totalPaginationPages = 20;
  const handlePaginationPageChange = (page) => {
    setCurrentPaginationPage(page)
  }
  const [conceptData, setConceptData] = React.useState([...concepts]);
  React.useEffect(() => {
    const fetchConcepts = async () => {
      const data = await ConceptApi.get_all(currentPaginationPage);
      setConceptData(data.concepts);
      setTotalPages(data.totalPages);
      setCurrentPaginationPage(data.currentPage)
    }
    fetchConcepts();
  },[currentPaginationPage])
  console.log(conceptData)
  return (
    <MainLayout>
        <h1>Concept Inventory</h1>
        <Table headings={conceptHeadings} tdData={conceptData} isHomePage={true}/>
        <Pagination totalPages={totalPages} currentPage={currentPaginationPage} onPageChange={handlePaginationPageChange}/>
    </MainLayout>
  )
}

export default Index