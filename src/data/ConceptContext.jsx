import axios from 'axios';
import React, { useState } from 'react'
import ConceptApi from '../Utils/ConceptApi';

const ConceptContext = React.createContext()

export const ConceptContextProvider = ({ children }) => {
    const conceptInitialData = [
        {
            model1: {
                conceptName: "",
                conceptDescription: "",
                understandingInputs: [''],
            },
            model2: {
                documentInput: "",
                audioInput: "",
                textInput: ""
            },
            model3: [
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
            ]
        }
    ]
    const [conceptData, setConceptData] = React.useState({
        model1: {
            conceptName: "",
            conceptDescription: "",
            understandingInputs: [''],
        },
        model2: {
            documentInput: "",
            audioInput: "",
            textInput: ""
        },
        model3: [
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
        ]
    });

    const conceptModelInitial = {
        model1: false,
        model2: false,
        model3: false, 
        editModel: false
    }

    const [conceptModelState, setConceptModelState] = React.useState({
        model1: false,
        model2: false,
        model3: false, 
        editModel: false
    });
    const initialCard = [false, false, false];
    const [cardStates, setCardStates] = React.useState([false, false, false, false]);
    const [conceptsData, setConceptsData] = React.useState([]);
    const [currentPaginationPage, setCurrentPaginationPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(0);

    const openConceptModel = (model) => {
        setConceptModelState({ ...conceptModelState, [model]: true })
    };

    const closeConceptModel = (model) => {
        setConceptModelState({ ...conceptModelState, [model]: false })
    };
    
    const [updatedConcept, setUpdatedConcept] = useState({
        editModel: {
            conceptName: "",
            conceptDescription: "",
            understandingInputs: [''],
        },
    })
    
    const handleConceptInputsChange = (modelName, name, index = null) => (event) => {
        if (modelName === 'model1' && name === 'understandingInputs') {
            const newUnderstandingInputs = [...conceptData.model1.understandingInputs];
            newUnderstandingInputs[index] = event.target.value;
            setConceptData(prevState => ({
                ...prevState,
                model1: {
                    ...prevState.model1,
                    understandingInputs: newUnderstandingInputs,
                }
            }));
        } else {
            setConceptData(prevState => ({
                ...prevState,
                [modelName]: {
                    ...prevState[modelName],
                    [name]: event.target.value,
                }
            }));
        }
    };

    const handleAddUnderstandingInput = () => {
        setConceptData(prevState => ({
            ...prevState,
            model1: {
                ...prevState.model1,
                understandingInputs: [...prevState.model1.understandingInputs, ''],
            },
        }));
    };

    const handleDeleteUnderstandingInput = (index) => {
        const newUnderstandingInputs = [...conceptData.model1.understandingInputs];
        newUnderstandingInputs.splice(index, 1);
        setConceptData(prevState => ({
            ...prevState,
            model1: {
                ...prevState.model1,
                understandingInputs: newUnderstandingInputs,
            },
        }));
    };
    
    const handleCardSelection = (index, isSelected) => {
        const newCardStates = [...cardStates];
        newCardStates[index] = isSelected;
        setCardStates(newCardStates);
    
        if(isSelected) {
            switch(index) {
                case 0:
                    setConceptData(prev => ({...prev, model2: {...prev.model2, documentInput: 'documentInput URL'}}));
                    break;
                case 1:
                    setConceptData(prev => ({...prev, model2: {...prev.model2, audioInput: 'audioInput URL'}}));
                    break;
                case 2:
                    setConceptData(prev => ({...prev, model2: {...prev.model2, textInput: 'textInput URL'}}));
                    break;
                default:
                    break;
            }
        } else {
            switch(index) {
                case 0:
                    setConceptData(prev => ({...prev, model2: {...prev.model2, documentInput: ''}}));
                    break;
                case 1:
                    setConceptData(prev => ({...prev, model2: {...prev.model2, audioInput: ''}}));
                    break;
                case 2:
                    setConceptData(prev => ({...prev, model2: {...prev.model2, textInput: ''}}));
                    break;
                default:
                    break;
            }
        }
    }

    const addConcept = async () => {
        const dataToSend = {
            conceptname: conceptData.model1.conceptName,
            description: conceptData.model1.conceptDescription,
            usagecount: 0,  
            documenturl: conceptData.model2.documentInput,
            audiourl: conceptData.model2.audioInput,
            textUrl: conceptData.model2.textInput,
            conclusionurl: 'http://example.com/conclusionUrl',
            averageconfidence: 0,
            inputs: conceptData.model1.understandingInputs.map(input => ({ name: input })),
        }
        try{
            const response = await axios.post('http://localhost:8000/api/concepts', dataToSend);
            console.log('Concept added successfully:', response);
            setConceptModelState(prevState => ({ ...prevState, model2: false, model3: true }))
            fetchConcepts();
        }catch(err){
            console.error('Failed to add concept:', err);
        }
    }

    const handlePaginationPageChange = (page) => {
        setCurrentPaginationPage(page);
    }

    const fetchConcepts = async () => {
        const data = await ConceptApi.get_all(currentPaginationPage);
        setConceptsData(data.concepts);
        setTotalPages(data.totalPages);
        setCurrentPaginationPage(data.currentPage);
    }

    const handleUpdatedConceptInputsChange = (model, field, index) => value => {
        console.log('value:', value);
    };
    
    const handleUpdatedDeleteUnderstandingInput = (model, index) => {
        setUpdatedConcept(prevData => {
            const newUnderstandings = [...prevData[model].understandingInputs];
            newUnderstandings.splice(index, 1);
            return {...prevData, [model]: {...prevData[model], understandingInputs: newUnderstandings}};
        });
    };
    const handleUpdatedAddUnderstandingInput = model => {
        setUpdatedConcept(prevData => {
            const newUnderstandings = [...prevData[model].understandingInputs, {name: ''}];
            return {...prevData, [model]: {...prevData[model], understandingInputs: newUnderstandings}};
        });
    };

    const updateSingleConcept = async (conceptId) => {
        const dataToSend = {
            conceptname: updatedConcept.editModel.conceptName,
            description: updatedConcept.editModel.conceptDescription,
            inputs: [],
        }
        try{
            const response = await axios.put(`http://localhost:8000/api/concepts/${conceptId}`, dataToSend);
            console.log('Concept updated successfully:', response);
            fetchConcepts();
        }catch(err){
            console.error('Failed to update concept:', err);
        }
    }

    const [currentConceptData, setCurrentConceptData] = React.useState([]);
    const [statLoading, setStatLoading] = React.useState(true);
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
    const transformApiResponse = (response) => {
        let transformedResponse = {};
        transformedResponse.editModel = {
            id: response.id,
            conceptName: response.conceptname,
            conceptDescription: response.description,
            understandingInputs: [],
        };
        response.inputs.forEach((input) => {
            transformedResponse.editModel.understandingInputs.push({ "name": input.name });
        });
        return transformedResponse;
    }

    // React.useEffect(() => {
        async function getStatsData(id) {
        try{
            const data = await ConceptApi.get_one(id);
            setCurrentConceptData(transformConceptResponse(data));
            setUpdatedConcept(transformApiResponse(data));
            setStatLoading(false)
        }catch(error){
        }
        }
        // getStatsData();
    // }, [])


    

    React.useEffect(() => {
        fetchConcepts();
    }, [currentPaginationPage])

    return (
        <ConceptContext.Provider value={{ 
            conceptsData, 
            currentPaginationPage, 
            totalPages, 
            conceptData, 
            conceptModelState,
            cardStates, 
            updatedConcept,
            currentConceptData,
            statLoading,
             handlePaginationPageChange, 
            getStatsData,
             fetchConcepts, 
             openConceptModel, 
             closeConceptModel, 
             handleConceptInputsChange, 
             handleAddUnderstandingInput, 
             handleDeleteUnderstandingInput, 
             addConcept, 
             handleCardSelection, 
             setConceptModelState,
             handleUpdatedConceptInputsChange,
             updateSingleConcept,
             handleUpdatedDeleteUnderstandingInput,
             handleUpdatedAddUnderstandingInput,
            setUpdatedConcept,  }}>
            {children}
        </ConceptContext.Provider>
    );
}

export default ConceptContext
