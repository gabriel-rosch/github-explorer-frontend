import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color .2s;

    &:hover {
      color: #666;
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const UserInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d4d
      }
      a {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
        display: flex;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      //Aplicar somente apartir do segundo elemento
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;

  a {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    display: flex;
    padding: 24px;

    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
    div {
      flex: 1;
      margin: 0 16px;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

