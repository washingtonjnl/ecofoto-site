import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import Mentors from '../pages/Mentors';
import Exposure from '../pages/Exposure';
import Home from '../pages/Home';
import PastEditions from '../pages/PastEditions';
import Photographers from '../pages/Photographers';
import PhotographerDetail from '../pages/PhotographerDetail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sobre" exact component={About} />
    <Route path="/palestrantes" exact component={Mentors} />
    <Route path="/participantes" exact component={Photographers} />
    <Route path="/participante" exact component={PhotographerDetail} />
    <Route path="/edicoes-anteriores" exact component={PastEditions} />

    <Route path="/expo" exact component={Exposure} />
  </Switch>
);

export default Routes;
