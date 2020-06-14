import React, { useState, useEffect } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assests/suglogo.svg';
import { Title, Users, customStyles} from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
Modal.setAppElement('#root')
interface User {
  id: number;
  login: string;
  avatar_url: string;
}


const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<User[]>([]);
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [newToken,setNewToken] = React.useState('');

  useEffect(() => {
      const authorization = localStorage.getItem('token')
      if(authorization) {
          try {
              api.get('/users', {
                  headers: {
                      'Authorization': authorization
                  }
              }).then(response => {
                  setUsers(response.data.result);
                  setNextPageUrl(response.data.next);
              })
          } catch (e) {
              setIsOpen(true);
          }
      } else {
          setIsOpen(true);
      }
  }, []);
  function saveToken() {
      localStorage.setItem('token',newToken);
      setIsOpen(false);
  }
  return (
    <>
      <img src={logo} alt="Github explorer" />
      <Title>Explore perfis no Github</Title>
      <Users>
        {users.map((user) => (
          <Link key={user.id} to={`/user/${user.login}`}>
            <img
              src={user.avatar_url}
              alt={user.login}
            />
            <div>
              <strong>{user.login}</strong>
              <p>id: {user.id}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Users>
        <button onClick={()=>setIsOpen(true)}>Open Modal</button>
        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <form onSubmit={saveToken}>
                <h2>Insira o token de autenticação do gitHub</h2>
                <input
                    placeholder='Token'
                    value={newToken}
                    onChange={(e) => setNewToken(e.target.value)}
                />
                <button type="submit">Salvar</button>
            </form>
        </Modal>
    </>
  );
};

export default Dashboard;
