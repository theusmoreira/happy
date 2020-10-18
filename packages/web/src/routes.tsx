import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateOrphanage from './pages/CreateOrphanage';
import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => (
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/app' component={OrphanagesMap} />
        <Route path='/orphanage/create' component={CreateOrphanage} />
        <Route path='/orphanage/:id' component={Orphanage} />
      </Switch>
);

export default Routes;
