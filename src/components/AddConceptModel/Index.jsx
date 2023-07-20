import React from 'react'
import './AddConceptModel.css'
import Button from "../Button"
import UnderstandingInput from '../UnderstandingInput'
import BigButton from '../BigButton'
import Card from '../Card'
import Document from '../Icons/Document'
import Audio from '../Icons/Audio';
import Text from '../Icons/Text';
import Table from '../Table'

const Index = ({isOpen, title, modelName, inputs, onInputChange, onCancel, onContinue}) => {
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

    const [cardStates, setCardStates] = React.useState([false, false, false]);
    const handleCardSelection = (index, isSelected) => {
        const newCardStates = [...cardStates];
        newCardStates[index] = isSelected;
        setCardStates(newCardStates);
    }

    return (
        <div className='ConceptModelOverlay'>
            <div className="ConceptModelWindow">
                <div className="headline">
                    <h2>{title}</h2>
                </div>
                {modelName == "model1" ? (
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
                ) : null}
                {modelName == "model2" ? (
                    <div className="model2">
                        <Card index={0} isSelected={cardStates[0]} onSelectionChange={handleCardSelection}  icon={<Document color="#F59E0B" width="44px" height="44px"/>}  title={"Document Input"}/>
                        <Card index={1} isSelected={cardStates[1]} onSelectionChange={handleCardSelection} icon={<Audio color="#F59E0B" width="44px" height="44px"/>}  title={"Audio Input"}/>
                        <Card index={2} isSelected={cardStates[2]} onSelectionChange={handleCardSelection} icon={<Text color="#F59E0B" width="44px" height="44px"/>}  title={"Text Input"}/>
                    </div>
                ) : null}
                {modelName == "model3" ? (
                    <div className="model3">
                        <Table headings={[]} tdData={[
                            {
                                url: "Mujarrad.Fhm.Text.Com/Url",
                                text: "Text Input URL"
                            },
                            {
                                url: "Mujarrad.Fhm.Audio.Com/Url",
                                text: "Audio Input URL"
                            },
                            {
                                url: "Mujarrad.Fhm.Document.Com/Url",
                                text: "Document Input URL"
                            },
                            {
                                url: "Mujarrad.Fhm.Conclusion.Com/Url",
                                text: "Conclusion Output URL"
                            },
                        ]}/>
                        <BigButton text="Back to Concept Inventory" onClick={() => console.log("Hello goda")}/>
                    </div>
                ) : null}
                
                <div className="conceptFooter">
                    <Button type="secondary" text="Go Back" onClick={onCancel}/>
                    {onContinue && <Button type="primary" text="Continue" onClick={onContinue}/>}
                </div>
            </div>
        </div>
    )
}

export default Index