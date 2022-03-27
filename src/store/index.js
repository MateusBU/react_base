import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persisteReducers from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persisteReducers(rootReducer), // para salvar os dados
  applyMiddleware(sagaMiddleware)
); // todas os reducer escutam todas as ações disparadas
// o rootReducer é um dicionario que contém mais de um reducer

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store); // salvar certos parametros
export default store;
