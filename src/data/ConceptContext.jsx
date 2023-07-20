import React from 'react'

const ConceptContext = React.createContext()
export const ConceptContextProvider = ({ children }) => {
    const [conceptData, setConceptData] = React.useState({
        model1: {},
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
    const handleConceptInputsChange = (e, model) => {
        const { name, value } = e.target;
        setConceptData(prevState => ({
            ...prevState,
            [model]: {
                ...prevState[model],
                [name]: value
            }
        }))
    };
    return (
        <ConceptContext.Provider value={{ conceptData, conceptModelState, openConceptModel, closeConceptModel, handleConceptInputsChange }}>
            {children}
        </ConceptContext.Provider>
    );

}
export default ConceptContext