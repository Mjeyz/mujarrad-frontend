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
import axios from 'axios'

const Index = ({isOpen, title, modelName, onCancel, onContinue}) => {
    if(!isOpen) return null;
    const [conceptData, setConceptData] = React.useState({
        conceptname: '',
        description: '',
        textUrl: 'Mujarrad.Fhm.Text.Com/Url',
        audioUrl: 'Mujarrad.Fhm.Audio.Com/Url',
        documentUrl: 'Mujarrad.Fhm.Document.Com/Url',
        conclusionUrl: 'Mujarrad.Fhm.Output.Com/Url',
        inputs: []
    });
    const [understandingInputs, setUnderstandingInputs] = React.useState([{name: ''}])
    const handleUnderstandingInputsChange = (index) => (event) => {
        const newUnderstandingInputs = [...understandingInputs];
        newUnderstandingInputs[index] = {name: event.target.value};
        setUnderstandingInputs(newUnderstandingInputs);
        setConceptData({ ...conceptData, inputs: newUnderstandingInputs });
    };
    
    const handleAddUnderstandingInput = () => {
        const newUnderstandingInputs = [...understandingInputs, {name: ''}];
        setUnderstandingInputs(newUnderstandingInputs);
        setConceptData({ ...conceptData, inputs: newUnderstandingInputs });
    };
    
    const handleDeleteUnderstandingInput = (index) => () => {
        const newUnderstandingInputs = [...understandingInputs];
        newUnderstandingInputs.splice(index, 1);
        setUnderstandingInputs(newUnderstandingInputs);
        setConceptData({ ...conceptData, inputs: newUnderstandingInputs });
    };
    const [cardStates, setCardStates] = React.useState([false, false, false]);
    const handleCardSelection = (index, isSelected) => {
        const newCardStates = [...cardStates];
        newCardStates[index] = isSelected;
        setCardStates(newCardStates);
    }
    
    // console.log(conceptData)
    // const handlePublish = async () => {
    //     try{
    //         console.log(conceptData)
    //         setShouldPublish(false);
    //     }catch(error){
    //         console.error(error);
    //     }
    // }
    const [publishConcept, setPublishConcept] = React.useState(false)
    function handlePublish(){
        setPublishConcept(true)
    }
    React.useEffect(()=>{
        function postData(data){
            console.log(data)
            setPublishConcept(false)
        }
        postData(conceptData)
    }, [publishConcept, conceptData])
    
    
    

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
                            name="conceptname"
                            placeholder='Concept Name'  
                            value={conceptData.conceptname}
                            onChange={(e) => setConceptData({...conceptData, conceptname: e.target.value})}/>
                        <input 
                            className='ConceptInput' 
                            type="text" 
                            name="description"
                            placeholder='Concept Description'
                            value={conceptData.description}
                            onChange={(e) => setConceptData({...conceptData, description: e.target.value})}/>
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
                        <BigButton text="Back to Concept Inventory" onClick={onCancel}/>
                    </div>
                ) : null}
                {modelName == "model3" ? null : (
                    <div className="conceptFooter">
                        <Button type="secondary" text="Go Back" onClick={onCancel}/>
                        {onContinue && <Button type="primary" text={modelName == "model2" ? "Publish" : "Continue"} onClick={modelName == "model2" ? handlePublish : onContinue}/>}
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Index