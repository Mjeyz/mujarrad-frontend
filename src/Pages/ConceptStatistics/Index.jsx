import React from 'react'
import MainLayout from '../../Layouts/MainLayout';
import { Link } from 'react-router-dom';
import Back from '../../Components/Icons/Back';
import Button from '../../Components/Button'
import Table from '../../Components/Table'
import statsData, { statsHeadings } from '../../Data/stats';
import ConceptModel from '../../Components/ConceptModel';

const Index = () => {
  const [isConceptModelOpen, setIsConceptModelOpen] = React.useState(false)
  const [ConceptModelData, setConceptModelData] = React.useState(statsData)
  const openConceptModel = (data) =>{
    setConceptModelData(data);
    setIsConceptModelOpen(true);
  }
  const closeConceptModel = () =>{
    setIsConceptModelOpen(false);
    setConceptModelData(null);
  
  }
  return (
    <MainLayout>
      <div className="pageNav">
        <Link to="/"><Back width="24px" height="24px" color="#000"/></Link>
        <h1>Concept Statistics</h1>
        <Button text="Edit Concept" type="primary" onClick={()=>openConceptModel(statsData)}/>
      </div>
      <Table headings={statsHeadings} tdData={statsData}/>
      <ConceptModel isOpen={isConceptModelOpen} isEdit={true} data={ConceptModelData} onClose={closeConceptModel}/>
    </MainLayout>
  )
}

export default Index