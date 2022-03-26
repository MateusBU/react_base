import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer); // todas os reducer escutam todas as ações disparadas
// o rootReducer é um dicionario que contém mais de um reducer
export default store;
