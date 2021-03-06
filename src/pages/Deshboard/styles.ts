import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-right: 220px;
  align-items: center;
  margin-top: 60px;
  h1 {
      color: #3a3a3a;
      line-height: 56px;
      font-size: 48px;
      max-width: 520px;
  }
  button {
    background-color: #fff;
    border-radius: 5px;
    height: 90px;
    width: 60px;
    text-decoration: none;
    border: none;
  }
`;

export const Users = styled.div`
  margin-top: 40px;
  max-width: 700px;

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
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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

export const ModalToken = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    },
};
