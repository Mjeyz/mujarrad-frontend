import React from 'react'
import MainLayout from '../../Layouts/MainLayout';
import { Link, useParams } from 'react-router-dom';
import Back from '../../Components/Icons/Back';
import Button from '../../Components/Button'
import Table from '../../Components/Table'
import statsData, { statsHeadings } from '../../Data/stats';
import ConceptApi from '../../Utils/ConceptApi';
import AddConceptModel from '../../Components/AddConceptModel'
import ConceptContext from '../../Data/ConceptContext';
const Index = () => {
  const conceptID = useParams();

  const {
    
    currentConceptData,
    statLoading, getStatsData, conceptModelState, openConceptModel, closeConceptModel, handleConceptInputsChange, setUpdatedConcept, updatedConcept
  } = React.useContext(ConceptContext);


  getStatsData(conceptID.id);

  return (
    <MainLayout>
      {statLoading ? <div>Loading...</div> : 
        <div className="pageNav">
          <Link to="/"><Back width="24px" height="24px" color="#000"/></Link>
          <h1>Concept Statistics</h1>
          <Button text="Edit Concept" type="primary" onClick={()=>openConceptModel("editModel")}/>
      </div>}
      {statLoading ? <div>Loading...</div> : <Table headings={statsHeadings} tdData={currentConceptData.concept}/>}
      
      <AddConceptModel
        isOpen={conceptModelState.editModel}
        title={"Edit Concept"}
        modelName="editModel"
        isEdit={true}
        inputs={updatedConcept.edit}
        onInputChange={handleConceptInputsChange}
        onCancel={() => closeConceptModel("editModel")}
      />
      {/* <ConceptModel isOpen={isConceptModelOpen} isEdit={false} data={ConceptModelData} onClose={closeConceptModel}/> */}
    </MainLayout>
  )
}

export default Index