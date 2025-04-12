import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Карта с названиями языков
const languageNames = {
  uk: 'UA',
  en: 'EN',
  pl: 'PL'
};

export default function LanguageSwitcher() {
  const { language, changeLanguage, LANGUAGES } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Закрываем дропдаун при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Обработчик выбора языка
  const handleLanguageSelect = (lang) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative z-[9999]" ref={dropdownRef}>
      {/* Кнопка переключателя языка */}
      <button
        className="flex items-center justify-center text-[#444444] text-[18px] font-normal leading-[28px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-1">{languageNames[language]}</span>
        <svg 
          width="14" 
          height="8" 
          viewBox="0 0 14 8" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M1 1L7 7L13 1" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Дропдаун с языками */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-[8px] shadow-md overflow-hidden z-[9999]" style={{ position: 'absolute', zIndex: 9999 }}>
          {Object.values(LANGUAGES).map((lang) => (
            <button
              key={lang}
              className={`block w-full text-left px-4 py-2 text-[16px] hover:bg-[#F5F5F5] ${language === lang ? 'font-medium text-[#4267B2]' : 'text-[#444444]'}`}
              onClick={() => handleLanguageSelect(lang)}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 