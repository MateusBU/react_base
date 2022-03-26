import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); // todas os reducer escutam todas as ações disparadas
// o rootReducer é um dicionario que contém mais de um reducer

sagaMiddleware.run(rootSaga);
export default store;
