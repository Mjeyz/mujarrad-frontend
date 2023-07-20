import React from 'react'
import './AddConceptModel.css'
import Button from "../Button"
import UnderstandingInput from '../UnderstandingInput'
import BigButton from '../BigButton'

const Index = ({isOpen, title, inputs, onInputChange, onCancel, onContinue}) => {
    if(!isOpen) return null;
    const [understandingInputs, setUnderstandingInputs] = React.useState([''])
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
                    <h2>{title}</h2>
                </div>
                <div className="details">
                    <h4 className="ConceptHeadlineInput">Concept Details</h4>
                    <div className="ConceptInputsGroup">
                        <input 
                            className='ConceptInput'
                            type="text" 
                            name=""
                            placeholder='Concept Name'  
                            value=""
                            onChange={onInputChange}/>
                        <input 
                            className='ConceptInput' 
                            type="text" 
                            name=""
                            placeholder='Concept Description'
                            value=""
                            onChange={onInputChange} />
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
                    <BigButton text="Add Another Understanding" onClick={handleAddUnderstandingInput} />
                </div>
                <div className="conceptFooter">
                    <Button type="secondary" text="Go Back" onClick={onCancel}/>
                    {onContinue && <Button type="primary" text="Continue" onClick={onContinue}/>}
                </div>
            </div>
        </div>
    )
}

export default Index