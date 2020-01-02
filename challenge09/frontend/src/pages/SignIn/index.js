import React from 'react';
import logo from '~/assets/logo-gympoint@2x.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Gympoint" />
      <form>
        <div className="form__group">
          <label htmlFor="email">SEU E-MAIL</label>
          <input type="email" id="email" placeholder="exemplo@email.com" />
        </div>
        <div className="form__group">
          <label htmlFor="">SUA SENHA</label>
          <input type="password" placeholder="******" />
        </div>
        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
