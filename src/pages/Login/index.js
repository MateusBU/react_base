import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch(); // dispara quantas açoes que quero e o reduce irá escutar

  function handleClick(e) {
    e.preventDefault();
    dispatch(
      exampleActions.clicaBotaoRequest() // TIPO DA AÇÃO QUE EU DISPARO
    );
  }
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oi</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit</Paragrafo>
      <a href="https://twitter.com/home">OI</a>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
