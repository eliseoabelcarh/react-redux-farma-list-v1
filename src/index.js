import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './pages/home'
import Results from './pages/results'
import Details from './components/details'
import Medicamentos from './pages/medicamentos'
import Consultorio from './pages/consultorioAPI'

import store from './store'

window.mi_store = store


const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/medicamentos" component={Medicamentos} />
        <Route path="/results" component={Results} />
        <Route path="/details/:itemId" component={Details} />
        <Route path="/consultorio" component={Consultorio} />
        <Route path='*' exact={true} component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(Root, document.getElementById('root')
);

reportWebVitals();
