import { ACTION } from '../context'
import { useDispatch } from '../context/hooks'

function SignOut() {
  const dispatch = useDispatch()

  return (
    <button
      className="sign-out"
      onClick={() => dispatch({ type: ACTION.SIGN_OUT })}>
      Sign Out
    </button>
  )
}

export default SignOut
