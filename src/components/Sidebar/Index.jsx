import React from 'react'
import './Sidebar.css'
import Logo from '../../assets/images/Logo.png'
import LangSwitcher from './LangSwitcher'
import Delivery from '../Icons/Delivery'
import Plus from '../Icons/Plus'
import ConceptModel from '../../Components/ConceptModel';
import { Link, NavLink } from 'react-router-dom'

const Index = () => {
  const [activeLink, setActiveLink] = React.useState(1);
  const navLinks = [
    { id: 1, title: 'Concept Inventory', path: '/', icon: <Delivery width='24' height='24' color={activeLink === 1 ? '#F59E0B' : '#000'} />},
    // { id: 2, title: 'New Concept', path: '/new-concept', icon: <Plus width='24' height='24' color={activeLink === 2 ? '#F59E0B' : '#000'} />},
  ];
  const [isConceptModelOpen, setIsConceptModelOpen] = React.useState(false)
  const [ConceptModelData, setConceptModelData] = React.useState([])
  const openConceptModel = (data) =>{
    setConceptModelData(data);
    setIsConceptModelOpen(true);
  }
  const closeConceptModel = () =>{
    setIsConceptModelOpen(false);
    setConceptModelData(null);
  }
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
      <button onClick={()=>openConceptModel()}>New Concept</button>
      <ConceptModel isOpen={isConceptModelOpen} isEdit={false} data={ConceptModelData} onClose={closeConceptModel}/>
    </div>
  )
}

export default Index