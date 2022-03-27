import { call, put, all, takeLatest } from 'redux-saga/effects';
// call chama uma função assíncrona
// all permitir ouvir mais de uma ação
import { toast } from 'react-toastify';

import * as types from '../types';
import * as actions from './actions';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  // função geradora tem o '*'
  // o saga irá ouvir o request, se der certo dispara a ação clicaBotoes
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSucess()); // só quando tiver sucesso, o botão será trocado
  } catch {
    toast.error('Deu erro');
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest), // 1º qual ação vai escutar, o qual função vai ser executada
]);
