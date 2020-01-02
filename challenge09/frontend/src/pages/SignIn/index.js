import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo-gympoint@2x.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string().required('A senha é obrigatória.'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Gympoint" />
      <Form schema={schema} onSubmit={handleSubmit}>
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
