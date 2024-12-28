import { useContext } from 'react'
import PropTypes from 'prop-types'
import { contextData } from '../Contex'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
 

    const {userData}=useContext(contextData)

    if(!userData){

      return <Navigate to="/login" />
      
   
    }

  return (
   <>{children}</>
  )
}

PrivateRoute.propTypes = {children: PropTypes.node.isRequired}

export default PrivateRoute