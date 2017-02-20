import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import {browserHistory} from 'react-router';
import makeRoutes from './routes';

injectTapEventPlugin();

const routes = makeRoutes();

ReactDOM.render(
  <App history={browserHistory} routes={routes}/>,
  document.getElementById('root')
);
