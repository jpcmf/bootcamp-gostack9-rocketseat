import React from 'react';

import { MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';

import { Wrapper, Header, Container } from './styles';

export default function Dashboard() {
  return (
    <Wrapper>
      <Header>
        <h2>Gerenciando alunos</h2>
        <div className="actions">
          <button type="submit">
            <MdAdd />
            CADASTRAR
          </button>
          <label htmlFor="">
            <MdSearch />
            <input type="text" placeholder="Buscar aluno" />
          </label>
        </div>
      </Header>
      <Container />
    </Wrapper>
  );
}
