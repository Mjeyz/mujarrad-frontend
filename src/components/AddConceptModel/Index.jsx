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
import ConceptContext from '../../context/ConceptContext'


const Index = ({isOpen, title, modelName, inputs, onCancel, isEdit}) => {
    if(!isOpen) return null;
    const { 
        conceptData, 
        updatedConcept,
        setUpdatedConcept,
        cardStates,
        handleConceptInputsChange, 
        handleAddUnderstandingInput, 
        handleDeleteUnderstandingInput, 
        setConceptModelState,
        addConcept,
        handleCardSelection,
        updateSingleConcept,
        handleUpdatedAddUnderstandingInput,
    } = React.useContext(ConceptContext);

    const changeHandler = (e) => {
        e.persist();
        setUpdatedConcept(prevState => ({
            ...prevState,
            editModel: {
                ...prevState.editModel,
                [e.target.name]: e.target.value,
            }
        }));
    }
    const handleUpdatedConceptInputsChange = (model, inputName, index) => e => {
        setUpdatedConcept(prevState => ({
            ...prevState,
            [model]: {
                ...prevState[model],
                [inputName]: prevState[model][inputName].map((input, i) => 
                    i === index ? {...input, name: e.target.value} : input
                ),
            },
        }));
    };
    const handleUpdatedDeleteUnderstandingInput = (model, index) => {
        setUpdatedConcept(prevState => ({
            ...prevState,
            [model]: {
                ...prevState[model],
                understandingInputs: prevState[model].understandingInputs.filter((_, i) => i !== index),
            },
        }));
    };
    

    return (
        <div className='ConceptModelOverlay'>
            <div className="ConceptModelWindow">
                <div className="headline">
                    <h2>{title}</h2>
                </div>
                {modelName == "editModel" ? (
                    <div className="details">
                        <h4 className="ConceptHeadlineInput">Concept Details</h4>
                        <div className="ConceptInputsGroup">
                            <input 
                                className='ConceptInput'
                                type="text" 
                                name="conceptName"
                                placeholder='Concept Name'  
                                value={updatedConcept.editModel.conceptName}
                                onChange={changeHandler}
                            />
                            <input 
                                className='ConceptInput' 
                                type="text" 
                                name="conceptDescription"
                                placeholder='Concept Description'
                                value={updatedConcept.editModel.conceptDescription}
                                onChange={changeHandler}
                            />
                        </div>
                        <h4 className="ConceptHeadlineInput">Understanding</h4>
                        <div className="understanding">
                            {updatedConcept.editModel.understandingInputs.map((input, index) => (
                                <UnderstandingInput 
                                    key={index}
                                    value={input} 
                                    onChange={handleUpdatedConceptInputsChange('editModel', 'understandingInputs', index)} 
                                    onDelete={() => handleUpdatedDeleteUnderstandingInput('editModel', index)}
                                />
                            ))}
                        </div>
                        <BigButton text="Add Another Understanding" onClick={() => handleUpdatedAddUnderstandingInput('editModel')} />
                    </div>
                ) : null}

                {modelName == "model1" ? (
                    <div className="details">
                    <h4 className="ConceptHeadlineInput">Concept Details</h4>
                    <div className="ConceptInputsGroup">
                        <input 
                            className='ConceptInput'
                            type="text" 
                            name="conceptname"
                            placeholder='Concept Name'  
                            value={conceptData.model1.conceptName}
                            onChange={handleConceptInputsChange('model1', 'conceptName')}
                        />
                        <input 
                            className='ConceptInput' 
                            type="text" 
                            name="description"
                            placeholder='Concept Description'
                            value={conceptData.model1.conceptDescription}
                            onChange={handleConceptInputsChange('model1', 'conceptDescription')}
                        />
                    </div>
                    <h4 className="ConceptHeadlineInput">Understanding</h4>
                    <div className="understanding">
                        {conceptData.model1.understandingInputs.map((input, index) => (
                            <UnderstandingInput 
                                key={index}
                                value={{name: input}} 
                                onChange={handleConceptInputsChange('model1', 'understandingInputs', index)} 
                                onDelete={() => handleDeleteUnderstandingInput(index)}
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
                        <Table headings={[]} tdData={conceptData.model3}/>
                        <BigButton text="Back to Concept Inventory" onClick={onCancel}/>
                    </div>
                ) : null}
                {modelName == "model3" ? null : (
                    <div className="conceptFooter">
                        <Button type="secondary" text="Go Back" onClick={onCancel}/>
                        {modelName == "model1" ? <Button type="primary" text={"Continue"} onClick={() => {
                            setConceptModelState(prevState => ({ ...prevState, model1: false, model2: true }))
                        }}/> : null}

                        {modelName == "model2" ? <Button type="primary" text={"Publish"} onClick={addConcept}/> : null}
                        {isEdit ? <Button type="primary" text={"Save"} onClick={() => updateSingleConcept(updatedConcept.editModel.id)}/> : null}
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Index