import React from 'react';

import { MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';

import { Wrapper, Header, Container, Table } from './styles';

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
      <Container>
        <Table>
          <table>
            <thead>
              <tr>
                <th>NOME</th>
                <th>E-MAIL</th>
                <th>IDADE</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>a</td>
                <td>a</td>
                <td>a</td>
                <td>
                  <div className="actions">
                    <a href="/">editar</a>
                    <a href="/">apagar</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>a</td>
                <td>a</td>
                <td>a</td>
                <td>
                  <div className="actions">
                    <a href="/">editar</a>
                    <a href="/">apagar</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>a</td>
                <td>a</td>
                <td>a</td>
                <td>
                  <div className="actions">
                    <a href="/">editar</a>
                    <a href="/">apagar</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Table>
      </Container>
    </Wrapper>
  );
}
