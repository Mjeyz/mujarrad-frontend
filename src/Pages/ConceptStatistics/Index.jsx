import React from 'react'
import MainLayout from '../../Layouts/MainLayout';
import { Link, useParams } from 'react-router-dom';
import Back from '../../Components/Icons/Back';
import Button from '../../Components/Button'
import Table from '../../Components/Table'
import statsData, { statsHeadings } from '../../Data/stats';
import ConceptModel from '../../Components/ConceptModel';
import ConceptApi from '../../Utils/ConceptApi';

const Index = () => {
  const conceptID = useParams();
  console.log(conceptID);
  const [currentConceptData, setCurrentConceptData] = React.useState([]);
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
  React.useEffect(() => {
    try{
      async function getData() {
        const data = await ConceptApi.get_one(conceptID.id);
        setCurrentConceptData(data);
        console.log(data);
      }
      getData();
    }catch(error){

    }
  }, [])

  return (
    <MainLayout>
      <div className="pageNav">
        <Link to="/"><Back width="24px" height="24px" color="#000"/></Link>
        <h1>Concept Statistics</h1>
        <Button text="Edit Concept" type="primary" onClick={()=>openConceptModel(statsData)}/>
      </div>
      <Table headings={statsHeadings} tdData={statsData}/>
      <ConceptModel isOpen={isConceptModelOpen} isEdit={false} data={ConceptModelData} onClose={closeConceptModel}/>
    </MainLayout>
  )
}

export default Index