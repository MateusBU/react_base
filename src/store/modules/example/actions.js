import * as types from '../types';

// TODAS AS AÇOES VAO FICAR AQUI, PARA MELHOR ORGANIZAÇÃO

export function clicaBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST, // TIPO DA AÇÃO QUE EU DISPARO
  };
}
export function clicaBotaoSucess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS, // TIPO DA AÇÃO QUE EU DISPARO
  };
}
export function clicaBotaoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE, // TIPO DA AÇÃO QUE EU DISPARO
  };
}
