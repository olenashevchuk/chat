import React from 'react'
import './App.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './services/firebase'
import { ChatRoom, SignOut, SignIn } from './components'

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  )
}

export default App
