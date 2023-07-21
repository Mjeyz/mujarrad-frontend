import React from 'react'

const ConceptContext = React.createContext()

export const ConceptContextProvider = ({ children }) => {
    const [conceptData, setConceptData] = React.useState({
        model1: {
            conceptName: "",
            conceptDescription: "",
            understandingInputs: [''],
        },
        model2: {},
        model3: {}
    });

    const [conceptModelState, setConceptModelState] = React.useState({
        model1: false,
        model2: false,
        model3: false
    });

    const openConceptModel = (model) => {
        setConceptModelState({ ...conceptModelState, [model]: true })
    };

    const closeConceptModel = (model) => {
        setConceptModelState({ ...conceptModelState, [model]: false })
    };

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

    return (
        <ConceptContext.Provider value={{ conceptData, conceptModelState, openConceptModel, closeConceptModel, handleConceptInputsChange, handleAddUnderstandingInput, handleDeleteUnderstandingInput }}>
            {children}
        </ConceptContext.Provider>
    );
}

export default ConceptContext
