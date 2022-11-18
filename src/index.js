import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './Router/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);

