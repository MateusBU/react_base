import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedId = false;

  if (isClosed && !isLoggedId) {
    // essa rota é fechado e o usario não está logado?
    // então redireciona para login
    // o prevPath salva o caminho antigo do user, quando terminar de logar
    // o user será redirecionado para esse prevPath
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,

  isClosed: PropTypes.bool,
};
