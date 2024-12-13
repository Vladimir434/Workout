/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
const WithAuth = ({children}) => {
    const token = localStorage.getItem('token')
    if (token) {
        return children
    }
  return <Navigate to={'/registration'}/>
    
  
}

export default WithAuth