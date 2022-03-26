import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state }; // copiou o estado para a newState, NÃO PODE MANIPULAR O STATE DIRETO
      newState.botaoClicado = !newState.botaoClicado; // toggle valor initiolState
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro');
      return state; // retorna o estado atual
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state; // retorna o estado atual
    }

    default: {
      return state;
    }
  }
}
