/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"


const useAuth = () => {
  const auth = useContext(AuthContext)
  return (
    <div>useAuth</div>
  )
}

export default useAuth