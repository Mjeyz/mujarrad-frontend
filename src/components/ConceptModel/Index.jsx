import React from 'react'
import './ConceptModel.css'
import Delete from '../Icons/Delete';
import UnderstandingInput from '../UnderstandingInput'
import ConceptInputsModel from '../ConceptInputsModel'
import Button from '../Button'
const Index = ({ isOpen, onClose, data, isEdit }) => {
    if(!isOpen){
        return null;
    }
    const [conceptName, setConceptName] = React.useState('');
    const [conceptDescription, setConceptDescription] = React.useState('');

    const [understandingInputs, setUnderstandingInputs] = React.useState([])
    const handleUnderstandingInputsChange = (index) => (event) => {
        const newUnderstandingInputs = [...understandingInputs];
        newUnderstandingInputs[index] = event.target.value;
        setUnderstandingInputs(newUnderstandingInputs);
        console.log(understandingInputs)
    };
    const handleAddUnderstandingInput = () => {
        setUnderstandingInputs([...understandingInputs, '']);
        console.log(understandingInputs)
    };
    const handleDeleteUnderstandingInput = (index) => () => {
        const newUnderstandingInputs = [...understandingInputs];
        newUnderstandingInputs.splice(index, 1);
        setUnderstandingInputs(newUnderstandingInputs);
        console.log(understandingInputs)
    };
    const [isConceptContinueOpen, setIsConceptContinueOpen] = React.useState(false)
    const [ConceptContinueData, setConceptContinueData] = React.useState([])
    const openConceptContinue = (data) =>{
        setConceptContinueData(data);
        setIsConceptContinueOpen(true);
        isOpen = false;
    }
    const closeConceptContinue = () =>{
        setIsConceptContinueOpen(false);
        setConceptContinueData(null);
    } 

    const handleConceptContinue = () => {
        isOpen = false;
    }

    return (
        <div className='ConceptModelOverlay'>
            <div className="ConceptModelWindow">
                <div className="headline">
                    <h2>{isEdit ? "Edit Concept" : "Add New Concept"}</h2>
                </div>
                <div className="details">
                    <h4 className="ConceptHeadlineInput">Concept Details</h4>
                    <div className="ConceptInputsGroup">
                        <input className='ConceptInput' type="text" name="" id="" placeholder='Concept Name' />
                        <input className='ConceptInput' type="text" name="" id="" placeholder='Concept Description' />
                    </div>
                    <h4 className="ConceptHeadlineInput">Understanding</h4>
                    <div className="understanding">
                        {understandingInputs.map((input, index) => (
                            <UnderstandingInput 
                                key={index}
                                value={input} 
                                onChange={handleUnderstandingInputsChange(index)} 
                                onDelete={handleDeleteUnderstandingInput(index)}
                            />
                        ))}
                    </div>
                    <button className="addAnotherUnderstanding" onClick={handleAddUnderstandingInput}>
                        Add Another Understanding
                    </button>
                </div>
                <div className="conceptFooter">
                    <Button type="secondary" text="Cancel" onClick={onClose}/>
                    <Button type="primary" text={isEdit ? "Save" : "Continue"} onClick={isEdit ? onClose : handleConceptContinue}/>
                </div>
                <ConceptInputsModel isOpen={isConceptContinueOpen} onClose={closeConceptContinue} data={ConceptContinueData} />
            </div>
        </div>
    )
}

export default Index