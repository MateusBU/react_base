import styled from 'styled-components';

export const Title = styled.h1`
  // TITLE
  background-color: red;
  color: ${(props) =>
    props.isRed
      ? 'red'
      : 'blue'}; /*se o isRed do Login/index,js (<Title isRed={false}>), for verdadiro, a cor da fonte é vermelho, se não é azul */

  //SMALL <- FILHO DO TITLE
  small {
    font-size: 12pt;
    background-color: green;
  }
`;

export const Paragrafo = styled.p`
  color: aqua;
  background-color: black;
`;
