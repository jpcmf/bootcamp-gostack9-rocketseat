import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from 'react-shimmer-effect';

import { MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';

import { Wrapper, Header, Container, Table } from './styles';
import LoadingLine from '~/components/LoadingLine';
import EmptyWrapper from '~/components/EmptyWrapper';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      setLoading(true);

      const response = await api.get('students', {
        params: {},
      });

      setStudents(response.data);
      setLoading(false);
    }
    loadStudents();
  }, []);

  useEffect(() => {
    document.title = 'Gympoint - Alunos';
  }, []);

  async function handleDeleteStudent(student) {}

  return (
    <Wrapper>
      <Header>
        <h2>Gerenciando alunos</h2>
        <div className="actions">
          <button type="submit">
            <MdAdd />
            CADASTRAR
          </button>
          <label htmlFor="search">
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
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td>
                    <Shimmer>
                      <LoadingLine />
                    </Shimmer>
                  </td>
                  <td>
                    <Shimmer>
                      <LoadingLine />
                    </Shimmer>
                  </td>
                  <td>
                    <Shimmer>
                      <LoadingLine />
                    </Shimmer>
                  </td>
                </tr>
              ) : (
                students.map(student => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.age}</td>
                    <td>
                      <div className="actions">
                        <Link to={`/students/${student.id}`}>editar</Link>
                        <a
                          href="/"
                          onClick={() => handleDeleteStudent(student)}
                        >
                          excluir
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              )}
              {!students.length && !loading && (
                <tr>
                  <td colSpan="3">
                    <EmptyWrapper>
                      <strong>Não há alunos cadastrados.</strong>
                    </EmptyWrapper>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Table>
      </Container>
    </Wrapper>
  );
}
