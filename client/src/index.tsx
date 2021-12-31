import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { userContext } from './context/userContext';

ReactDOM.render(
  <React.StrictMode>
    <userContext.Provider value=''>
      <App />
    </userContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
