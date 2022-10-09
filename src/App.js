import React from 'react';
import './App.css';
import {useRoutes} from 'react-router-dom';
import routes from './Routes';

export default function App() {

  let Router = useRoutes(routes);

  return (
    <div>
      {Router}
    </div>
  )
}
