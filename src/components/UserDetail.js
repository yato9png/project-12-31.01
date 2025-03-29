// src/components/UserDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { user_id } = useParams(); // Получаем ID пользователя из URL
  const [user, setUser] = useState(null); // Состояние для хранения данных пользователя
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(null); // Состояние ошибки

  useEffect(() => {
    // Fetch данных о конкретном пользователе
    fetch(`https://json-placeholder.mock.beeceptor.com/users/${user_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Пользователь не найден');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data); // Сохраняем данные в состояние
        setLoading(false); // Загрузка завершена
      })
      .catch((error) => {
        console.error('Ошибка:', error);
        setError(error.message); // Сохраняем сообщение об ошибке
        setLoading(false); // Загрузка завершена
      });
  }, [user_id]);

  if (loading) {
    return <p>Загрузка данных пользователя...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div>
      <h1>Информация о пользователе</h1>
      <div>
        {/* Отображение фотографии */}
        <img src={user.photo} alt={`${user.name}`} style={{ width: '150px', height: '150px' }} />
        <p><strong>Имя:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Телефон:</strong> {user.phone}</p>
        <p><strong>Адрес:</strong> {user.address}</p>
      </div>
    </div>
  );
};

export default UserDetail;