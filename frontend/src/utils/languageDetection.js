import { LANGUAGES } from '../context/LanguageContext';

/**
 * Определяет язык пользователя на основе настроек браузера
 * @returns {string} Код языка в формате 'en', 'pl'
 */
export function detectUserLanguage() {
  try {
    // Получаем настройки языка из браузера
    const browserLang = navigator.language || navigator.userLanguage || '';
    const langCode = browserLang.toLowerCase().split('-')[0];

    // Проверяем, поддерживается ли язык в нашем приложении
    if (langCode === 'en') {
      return LANGUAGES.EN;
    } else if (langCode === 'pl') {
      return LANGUAGES.PL;
    }

    // По умолчанию возвращаем польский
    return LANGUAGES.PL;
  } catch (error) {
    console.error('Error detecting user language:', error);
    return LANGUAGES.PL; // По умолчанию польский язык
  }
} 