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
  const [currentConceptData, setCurrentConceptData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const transformConceptResponse = (response) => {
    let transformedResponse = {};
    transformedResponse.concept = [
        {
            "id" : response.id,
            "name": response.conceptname,
            "description": response.description,
            "hits": response.usagecount,
            "averageConfidence": 70
        }
    ];
 
    response.inputs.forEach((input, index) => {
        transformedResponse.concept.push({
            "id" : (response.id + (index + 1)),
            "name": input.name,
            "description": "-",
            "hits": input.hits,
            "averageConfidence": input.averageConfidence
        });
    });
    return transformedResponse;
  }
  console.log(currentConceptData.concept)
  React.useEffect(() => {
      async function getData() {
      try{
        const data = await ConceptApi.get_one(conceptID.id);
        setCurrentConceptData(transformConceptResponse(data));
        setLoading(false)
      }catch(error){
      }
    }
    getData();
  }, [])

  return (
    <MainLayout>
      <div className="pageNav">
        <Link to="/"><Back width="24px" height="24px" color="#000"/></Link>
        <h1>Concept Statistics</h1>
        <Button text="Edit Concept" type="primary" onClick={()=>console.log(statsData)}/>
      </div>
      {loading ? <div>Loading...</div> : <Table headings={statsHeadings} tdData={currentConceptData.concept}/>}
      
      {/* <ConceptModel isOpen={isConceptModelOpen} isEdit={false} data={ConceptModelData} onClose={closeConceptModel}/> */}
    </MainLayout>
  )
}

export default Index