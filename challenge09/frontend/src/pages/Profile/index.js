import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdCheck } from 'react-icons/md';

import { Wrapper, Container, Header } from './styles';

export default function Profile() {
  return (
    <Wrapper>
      <Header>
        <h2>Editar perfil</h2>
        <div className="actions">
          <button type="button">
            <MdCheck />
            SALVAR
          </button>
        </div>
      </Header>
      <Container>
        <Form>
          <div className="form__group">
            <label htmlFor="name">Nome completo</label>
            <Input
              name="name"
              type="text"
              placeholder="Digite seu nome completo"
            />
          </div>
          <div className="form__group">
            <label htmlFor="email">E-mail</label>
            <Input
              name="email"
              type="email"
              placeholder="Digite seu nome e-mail"
            />
          </div>
          <hr />
          <div className="form__group">
            <label htmlFor="oldPassword">Senha atual</label>
            <Input
              name="oldPassword"
              type="password"
              placeholder="Digite sua senha atual"
            />
          </div>
          <div className="form__group">
            <label htmlFor="password">Nova senha</label>
            <Input
              name="password"
              type="password"
              placeholder="Digite sua nova senha"
            />
          </div>
          <div className="form__group">
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua nova senha"
            />
          </div>
        </Form>
      </Container>
    </Wrapper>
  );
}
