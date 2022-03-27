import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-BASE', // NOME-DA-APLICACAO
      storage,
      whitelist: ['example'], // recebe quem que eu qeuro que salve, o modulo que será salva se encontra em rootReducer
    },
    reducers
  );

  return persistedReducers;
};
