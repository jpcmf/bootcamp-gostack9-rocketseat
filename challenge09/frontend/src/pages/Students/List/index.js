import React, { useState, useEffect } from 'react';
import Shimmer from 'react-shimmer-effect';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Wrapper, Header, Container, Table } from './styles';
import LoadingLine from '~/components/LoadingLine';
import EmptyWrapper from '~/components/EmptyWrapper';
import ConfirmAlert from '~/components/ConfirmAlert';

import api from '~/services/api';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      try {
        setLoading(true);

        const response = await api.get('students', {
          params: {},
        });
        setStudents(response.data);
      } catch (error) {
        toast.error('Não foi possível carregar os alunos.');
      }

      setLoading(false);
    }
    loadStudents();
  }, []);

  useEffect(() => {
    document.title = 'Gympoint - Alunos';
  }, []);

  async function handleDeleteStudent(student) {
    async function deleteStudent() {
      try {
        await api.delete(`/students/${student.id}`);
        toast.success('Aluno deletado com sucesso.');

        setStudents(
          students.filter(currentStudent => currentStudent.id !== student.id)
        );
      } catch (error) {
        toast.error('Não foi possível excluir o aluno.');
      }
    }

    confirmAlert({
      customUI: ({ onClose }) => ( // eslint-disable-line
        <ConfirmAlert
          callback={deleteStudent}
          onClose={onClose}
          title="Tem certeza que deseja excluir o aluno?"
          message={
            <p>
              Ao confirmar que o aluno <strong>{student.name}</strong> será
              excluído não será possível reverter. Tem certeza que deseja
              excluir?
            </p>
          }
        />
      ),
    });
  }

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
                        <button
                          type="button"
                          onClick={() => handleDeleteStudent(student)}
                        >
                          excluir
                        </button>
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
