import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import BaseLayout from './components/layout/BaseLayout'

import Home from './components/Home'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home}/>



      </Switch>
    
    </BaseLayout>

  </BrowserRouter>,
  document.getElementById('root')
);

