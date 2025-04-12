import { LANGUAGES } from '../context/LanguageContext';

/**
 * Определяет язык пользователя на основе настроек браузера
 * @returns {string} Код языка в формате 'uk', 'en', 'pl'
 */
export function detectUserLanguage() {
  try {
    // Получаем настройки языка из браузера
    const browserLang = navigator.language || navigator.userLanguage || '';
    const langCode = browserLang.toLowerCase().split('-')[0];

    // Проверяем, поддерживается ли язык в нашем приложении
    if (langCode === 'uk' || langCode === 'ua') {
      return LANGUAGES.UK;
    } else if (langCode === 'pl') {
      return LANGUAGES.PL;
    } else if (langCode === 'en') {
      return LANGUAGES.EN;
    }

    // По умолчанию возвращаем украинский
    return LANGUAGES.EN;
  } catch (error) {
    console.error('Error detecting user language:', error);
    return LANGUAGES.EN; // По умолчанию украинский язык
  }
} 