import React from 'react'
import './LanguageSwitcher.css';

const LangSwitcher = () => {
    const [selectedLanguage, setSelectedLanguage] = React.useState('english');

    const handleLanguageToggle = () => {
        setSelectedLanguage(prevLanguage => 
            prevLanguage === 'english' ? 'arabic' : 'english'
        );
    };
  return (
    <div className="language-switcher-container">
      <button
        className={`language-button ${selectedLanguage === 'english' ? 'selected' : ''}`}
        onClick={handleLanguageToggle}
      >
        English
      </button>
      <button
        className={`language-button ${selectedLanguage === 'arabic' ? 'selected' : ''}`}
        onClick={handleLanguageToggle}
      >
        Arabic
      </button>
    </div>
  )
}

export default LangSwitcher