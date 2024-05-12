import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import KategoriContextProvider from './Context/KategoriContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <KategoriContextProvider>
    <App />
  </KategoriContextProvider>
);

