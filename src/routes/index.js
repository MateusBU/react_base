import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

/* Na raíz do site -> localhostal:3000/ <- o Login de pages será renderizado */
/* Está só a '/', pois eu escolhi, mas eu poderia escrever /Login */
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
