import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

/**
 * Хук для получения переводов в зависимости от выбранного языка
 * @returns {Object} { t, language, changeLanguage }
 */
export const useTranslation = () => {
  const { language, changeLanguage } = useLanguage();

  /**
   * Функция для получения перевода по ключу
   * @param {string} key - Ключ перевода в формате 'nav.services'
   * @returns {string} Перевод
   */
  const t = (key) => {
    try {
      // Разбиваем ключ на части (например, 'nav.services' -> ['nav', 'services'])
      const keys = key.split('.');
      
      // Получаем переводы для текущего языка
      let translation = translations[language];
      
      // Проходимся по всем частям ключа
      for (const k of keys) {
        translation = translation[k];
        
        // Если перевод не найден, возвращаем ключ
        if (translation === undefined) {
          console.warn(`Translation key "${key}" not found for language "${language}"`);
          return key;
        }
      }
      
      return translation;
    } catch (error) {
      console.error(`Error getting translation for key "${key}":`, error);
      return key;
    }
  };

  return { t, language, changeLanguage };
}; 