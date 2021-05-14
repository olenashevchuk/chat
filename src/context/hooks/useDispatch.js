import { useContext } from 'react'
import { SessionDispatch } from '../'

const useDispatch = () => useContext(SessionDispatch)

export default useDispatch
