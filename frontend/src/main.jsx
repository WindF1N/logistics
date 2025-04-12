import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Импортируем провайдер языка
import { LanguageProvider } from './context/LanguageContext';

// Импортируем компоненты
import App from './App';
import Home from './pages/Home';

// Создаем маршруты
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Основной компонент
    children: [
      {
        path: '/',
        element: <Home />, // Главная страница
      },
      {
        path: '/pouches',
        element: <Home />, // Главная страница
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
);