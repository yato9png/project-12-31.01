// src/components/MainPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [users, setUsers] = useState([]); // Состояние для хранения списка пользователей
  const [loading, setLoading] = useState(true); // Состояние загрузки

  useEffect(() => {
    // Fetch данных о пользователях
    fetch('https://json-placeholder.mock.beeceptor.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при получении данных');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data); // Сохраняем данные в состояние
        setLoading(false); // Загрузка завершена
      })
      .catch((error) => {
        console.error('Ошибка:', error);
        setLoading(false); // В случае ошибки также завершаем загрузку
      });
  }, []);

  if (loading) {
    return <p>Загрузка пользователей...</p>;
  }

  return (
    <div>
      <h1>Список пользователей</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              {/* Ссылка на страницу пользователя */}
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))
        ) : (
          <p>Пользователи не найдены.</p>
        )}
      </ul>
    </div>
  );
};

export default MainPage;