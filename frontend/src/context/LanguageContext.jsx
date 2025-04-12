import React, { createContext, useState, useEffect, useContext } from 'react';
import { detectUserLanguage } from '../utils/languageDetection';

// Создаем контекст для управления языком
export const LanguageContext = createContext();

// Доступные языки в приложении
export const LANGUAGES = {
  UK: 'uk',
  EN: 'en',
  PL: 'pl'
};

// Провайдер контекста языка
export const LanguageProvider = ({ children }) => {
  // Состояние для хранения текущего языка
  const [language, setLanguage] = useState(() => {
    // Проверяем сохраненный язык в localStorage
    const savedLanguage = localStorage.getItem('language');
    // Если есть сохраненный язык, используем его, иначе определяем по браузеру
    return savedLanguage || detectUserLanguage();
  });

  // Сохраняем выбранный язык в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Функция для изменения языка
  const changeLanguage = (lang) => {
    if (Object.values(LANGUAGES).includes(lang)) {
      setLanguage(lang);
    }
  };

  // Значение контекста
  const value = {
    language,
    changeLanguage,
    LANGUAGES
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для использования контекста языка
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 