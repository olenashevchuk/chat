import { useContext } from 'react'
import { SessionContext } from '../'

const useSession = () => useContext(SessionContext)

export default useSession
