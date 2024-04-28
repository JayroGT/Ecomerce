import React from 'react'
import ReactDOM from 'react-dom'; // Importa desde 'react-dom' en lugar de 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
      domain = "dev-okt2hgvro573i65r.us.auth0.com"
      clientId= "frAGa9tvJUP3ND5KGcXjcYvlPaKcBUjG"
      authorizationParams={{
      redirect_uri: window.location.origin
      }}>
      <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
)
 