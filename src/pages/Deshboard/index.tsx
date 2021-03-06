import React, { useState, useEffect } from 'react';

import { FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import logo from '../../assests/suglogo.svg';
import { Users, ModalToken, Header} from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
Modal.setAppElement('#root')

interface User {
  id: number;
  login: string;
  avatar_url: string;
}
interface Paginarion {
    nextPageUrl: string,
    backPageUrl: string
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pagination, setPagination] = useState<Paginarion | null>(null);
  const [page, setPage] = useState(1);
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [newToken,setNewToken] = React.useState('');

  useEffect(() => {
      const authorization = localStorage.getItem('token')
      if(authorization) {
          loadUsers('');
      } else {
          setIsOpen(true);
      }
  }, []);
  function loadUsers(url: string) {
      api.get(url ? url :`/users`, {
          headers: {
              'Authorization': localStorage.getItem('token')
          }
      }).then(response => {
          if(response.data.result.length) {
              setUsers(response.data.result);
              setPagination(response.data.pagination);
          }
      }).catch(function(error) {
          alert('Erro ao carregar usuarios verifique suas credenciais.');
      });
  }
  function saveToken() {
      localStorage.setItem('token',newToken);
      loadUsers('');
      setIsOpen(false);
  }
  return (
    <>
      <img src={logo} alt="Github explorer" />
      <Header>
          <h1>Explore perfis no Github</h1>
          <button onClick={()=>loadUsers(pagination ? pagination.backPageUrl : '')}>
              <FiChevronLeft size={40}/>
          </button>
          <button onClick={()=>loadUsers(pagination ? pagination.nextPageUrl : '')}>
              <FiChevronRight size={40}/>
          </button>
      </Header>
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
        <Modal
            isOpen={modalIsOpen}
            style={ModalToken}
            contentLabel="Example Modal"
        >
            <form className='form-modal' onSubmit={saveToken}>
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
