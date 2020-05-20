import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input palceholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Criar conta</button>
        <Link to="/">Ja tenho login</Link>
      </form>
    </>
  );
}
