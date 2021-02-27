import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SessionProviderContext } from './context/'

ReactDOM.render(
  <React.StrictMode>
    <SessionProviderContext>
      <App />
    </SessionProviderContext>
  </React.StrictMode>,
  document.getElementById('root')
)
