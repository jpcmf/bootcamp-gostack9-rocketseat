import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { MdCheck } from 'react-icons/md';

import AvatarInput from './AvatarInput';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Wrapper, Container, Header } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Wrapper>
      <Header>
        <h2>Editar perfil</h2>
        <div className="actions">
          <button type="submit" form="my-form">
            <MdCheck />
            SALVAR
          </button>
        </div>
      </Header>
      <Container>
        <Form id="my-form" initialData={profile} onSubmit={handleSubmit}>
          <AvatarInput name="avatar_id" />
          <input type="hidden" value="prayer" />
          <div className="form__group">
            <label htmlFor="name">Nome completo</label>
            <Input
              id="name"
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
