import { ACTION } from './'
import { signIn, signOut } from '../services'

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SIGN_IN:
      return signIn()
    case ACTION.SIGN_OUT:
      return signOut()
    default:
      return state
  }
}

export default reducer
