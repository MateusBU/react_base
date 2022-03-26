import * as types from '../types';

// TODAS AS AÇOES VAO FICAR AQUI, PARA MELHOR ORGANIZAÇÃO

export function clicaBotao() {
  return {
    type: types.BOTAO_CLICADO, // TIPO DA AÇÃO QUE EU DISPARO
  };
}
