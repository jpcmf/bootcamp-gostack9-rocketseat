import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo2-gympoint@2x.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
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
              <strong>João Paulo Fricks</strong>
              <Link to="/logout">sair do sistema</Link>
            </div>
            <Link to="/profile">
              <img
                src="https://api.adorable.io/avatars/40/abott@adorable.png"
                alt="João Paulo Fricks"
              />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
