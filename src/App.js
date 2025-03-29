// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import UserDetail from './components/UserDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<MainPage />} />
        {/* Страница с деталями пользователя */}
        <Route path="/users/:user_id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
};

export default App;