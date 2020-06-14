import React, { useEffect, useState }from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Header, UserInfo, Repositories} from './styles';
import logo from '../../assests/suglogo.svg';
import api from '../../services/api';
import { getFormattedDate } from "../../services/dateFormatterService";

interface UserParams {
  login: string;
}
interface Repository {
  id: number
  name: string,
  html_url: string
}
interface User {
  id: number;
  login: string;
  html_url: string;
  created_at: string;
  avatar_url: string;
}
const User: React.FC = () => {
  const { params } = useRouteMatch<UserParams>();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    api.get(`users/${params.login}/repos`,{
      headers: {
        'Authorization': 'b56a473ab2d3c7fc3055278d0a77bdb923d84ed9',
      }
    }).then(response => {
      setRepositories(response.data);
    });

    api.get(`users/${params.login}/details`, {
      headers: {
        'Authorization': 'b56a473ab2d3c7fc3055278d0a77bdb923d84ed9',
      }
    }).then(response => {
      setUser(response.data);
    });

  }, [params.login]);

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer"/>
        <Link to="/">
          <FiChevronLeft size={16}/>
          Voltar
        </Link>
      </Header>
      {user && (
        <UserInfo>
          <header>
            <img src={user.avatar_url} alt={user.login}/>
            <div>
              <strong>{user.login}</strong>
              <a href={user.html_url}>{user.html_url}</a>
            </div>
          </header>
          <ul>
            <li>
              <strong>ID</strong>
              <span>{user.id}</span>
            </li>
            <li>
              <strong>Data de criação</strong>
              <span>{getFormattedDate(new Date(user.created_at))}</span>
            </li>
          </ul>
        </UserInfo>
      )}
      <Repositories>
        {repositories.map(repository => (
          <a key={repository.id} href={repository.html_url}>
            <div>
              <strong>{repository.name}</strong>
              <p>Id: {repository.id}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}

      </Repositories>
    </>
  );
};

export default User;
