import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function Before() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [fetchUser, setFetchUser] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = () => {
      if (fetchUser && username) {
        axios.get(`https://api.github.com/users/${username}`)
          .then(response => {
            const data = response.data;

            setUserData({
              avatarUrl: data.avatar_url,
              followers: data.followers,
              location: data.location ,
              fullName: data.name,
            });

            setError('');
          })
          .catch(() => {
           
            setError('Erro ao buscar usuário');
          })
          .finally(() => {
            // Reinicializa o estado fetchUser após a conclusão da busca
            setFetchUser(false);
          });
      }
    };

    // Chama a função de busca quando fetchUser ou username são alterados
    fetchUserData();
  }, [fetchUser, username]);

  const handleButtonClick = () => {
    // Configura o estado fetchUser para true quando o botão é pressionado
    setFetchUser(true);
  };

  return (
    <main>
      <section className="container mt54 mb54">
        <div className="before-container">
          <h2>Encontre um perfil no Github</h2>
          <input
            type="text"
            placeholder='Usuário Github'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleButtonClick}>Encontrar</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </section>

      {userData && !error && (
        <section className="container mt54 mb54">
          <div className="user-profile-container">
            <div className="user-photo">
              <img src={userData.avatarUrl} alt="Foto" />
            </div>
            <div className="user-info-card">
              <h3>Informações</h3>
              <p>Perfil: {username}</p>
              <p>Seguidores: {userData.followers}</p>
              <p>Localidade: {userData.location}</p>
              <p>Nome Completo: {userData.fullName}</p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
