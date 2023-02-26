import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { App } from './App'
// import { store } from '../src/store/store'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
