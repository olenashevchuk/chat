import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SessionProviderContext } from './context/'

console.log('hello? world')
console.log('errrrrorrr')
ReactDOM.render(
  <React.StrictMode>
    <SessionProviderContext>
      <App />
    </SessionProviderContext>
  </React.StrictMode>,
  document.getElementById('root')
)
