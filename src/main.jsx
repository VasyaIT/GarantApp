import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { manifestUrl } from './const.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TonConnectUIProvider>,
)
