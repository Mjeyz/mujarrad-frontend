import React from 'react'
import './Sidebar.css'
import Logo from '../../assets/images/Logo.png'
import LangSwitcher from './LangSwitcher'
import Delivery from '../Icons/Delivery'
import Plus from '../Icons/Plus'
import AddConceptModel from '../AddConceptModel'
// import ConceptModel from '../../Components/ConceptModel';
import { Link, NavLink } from 'react-router-dom'
import ConceptContext from '../../Data/ConceptContext'

const Index = () => {
  const [activeLink, setActiveLink] = React.useState(1);
  const navLinks = [
    { id: 1, title: 'Concept Inventory', path: '/', icon: <Delivery width='24' height='24' color={activeLink === 1 ? '#F59E0B' : '#000'} />},
    // { id: 2, title: 'New Concept', path: '/new-concept', icon: <Plus width='24' height='24' color={activeLink === 2 ? '#F59E0B' : '#000'} />},
  ];
  const {
    conceptData, conceptModelState, openConceptModel, closeConceptModel, handleConceptInputsChange
  } = React.useContext(ConceptContext)
  console.log(conceptModelState)
    
  return (
    <div className='main-sidebar'>
      <div className="brand-section">
        <img src={Logo} alt="" />
        <h2 className="brand-text">Mujarrad FHM</h2>
        <LangSwitcher />
      </div>
        {navLinks.map(link => (
          <Link 
            to={link.path} 
            key={link.id} 
            className={`side-nav-link ${activeLink === link.id ? 'navLinkActive' : ''}`}
            onClick={() => setActiveLink(link.id)}>
            {link.icon}
            <span>{link.title}</span>
          </Link>
        ))}
        
      <div className={`new-concept-btn`} onClick={()=>openConceptModel("model1")}><Plus color={"#000"} width={"24px"} height={"24px"}/> <span>New Concept</span></div>
      <AddConceptModel
        isOpen={conceptModelState.model1}
        title={"Add Concept"}
        modelName="model1"
        inputs={conceptData.model1}
        onInputChange={handleConceptInputsChange}
        onCancel={() => closeConceptModel("model1")}
        onContinue={()=>{
          closeConceptModel("model1")
          openConceptModel("model2")
        }}
      />
      <AddConceptModel
        isOpen={conceptModelState.model2}
        title={"Concept Inputs"}
        modelName="model2"
        inputs={conceptData.model2}
        onInputChange={handleConceptInputsChange}
        onCancel={() => closeConceptModel("model2")}
        onContinue={()=>{
          closeConceptModel("model2")
          openConceptModel("model3")
        }}
      />
      <AddConceptModel
        isOpen={conceptModelState.model3}
        title={"Concept Information"}
        modelName="model3"
        inputs={conceptData.model3}
        onInputChange={handleConceptInputsChange}
        onCancel={() => closeConceptModel("model3")}
        onContinue={()=>{
          closeConceptModel("model3")
        }}
      />
      {/* <ConceptModel isOpen={isConceptModelOpen} isEdit={false} data={ConceptModelData} onClose={closeConceptModel}/> */}
    </div>
  )
}

export default Index