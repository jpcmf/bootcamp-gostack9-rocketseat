import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo2-gympoint@2x.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <Link to="/">ALUNOS</Link>
          <Link to="/">PLANOS</Link>
          <Link to="/">MATRÍCULAS</Link>
          <Link to="/">PEDIDOS DE AUXÍLIO</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/logout">sair do sistema</Link>
            </div>
            <Link to="/profile">
              <img
                src={
                  profile.avatar.url ||
                  'https://api.adorable.io/avatars/40/abott@adorable.png'
                }
                alt={profile.name}
              />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
