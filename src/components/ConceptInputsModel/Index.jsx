import React from 'react'
import './ConceptInputsModel.css'
const Index = ({ isOpen, onClose, data }) => {
    if(!isOpen){
        return null;
    }
    return (
        <div className='ConceptModelOverlay'>
            <div className="ConceptModelWindow">
                <div className="headline">
                    <h2>{"Concept Inputs"}</h2>
                </div>
                <div className="details">

                </div>
                <div className="conceptFooter">
                    <Button type="secondary" text="Go Back" onClick={onClose}/>
                    <Button type="primary" text="Publish" onClick={onClose}/>
                </div>
            </div>
        </div>
    )
}

export default Index