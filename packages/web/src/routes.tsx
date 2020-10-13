import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/map' component={OrphanagesMap} />
      </Switch>
  );
}

export default Routes;
