import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './components/home'
import Results from './components/results'
import Details from './components/details'

import store from './store'

window.mi_store = store


const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/details/:itemId" component={Details} />
        <Route path='*' exact={true} component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(Root, document.getElementById('root')
);

reportWebVitals();
