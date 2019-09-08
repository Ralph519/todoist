import React from 'react';
import { render } from 'react-dom';
// import { App } from './App';
import './app.scss';

import { useRoutes } from "hookrouter";
import routes from "./util/Router";

function App() {
    const routeResult = useRoutes(routes);
    return routeResult;
  }

render(<App />, document.getElementById('root'));