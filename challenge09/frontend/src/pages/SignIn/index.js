import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo-gympoint@2x.png';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Gympoint" />
      <Form onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="email">SEU E-MAIL</label>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
        </div>
        <div className="form__group">
          <label htmlFor="password">SUA SENHA</label>
          <Input name="password" type="password" placeholder="*************" />
        </div>
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
