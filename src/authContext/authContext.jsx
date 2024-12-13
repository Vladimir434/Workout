/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [isAuth, setAuth] = useState(false)
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
  return (
    <>
    <AuthContext.Provider value={{
        isAuth, setAuth,
         token, setToken,
          email, setEmail,
           name, setName}}>
            {children}
    </AuthContext.Provider>
    </>
  )
}

export default AuthProvider