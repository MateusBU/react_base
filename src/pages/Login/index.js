import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oi</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit</Paragrafo>
      <a href="https://twitter.com/home">OI</a>
      <button type="button">Enviar</button>
    </Container>
  );
}
