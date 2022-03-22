import { createStore } from 'redux';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state }; // copiou o estado para a newState, NÃO PODE MANIPULAR O STATE DIRETO
      newState.botaoClicado = !newState.botaoClicado; // toggle valor initiolState
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer); // todas os reducer escutam todas as ações disparadas

export default store;
