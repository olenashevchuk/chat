import { SessionContext, SessionDispatch } from '.'
import { useReducer } from 'react'
import reducer from './reducer'

const SessionProviderContext = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <SessionDispatch.Provider value={dispatch}>
      <SessionContext.Provider value={state}>
        {children}
      </SessionContext.Provider>
    </SessionDispatch.Provider>
  )
}

export default SessionProviderContext
