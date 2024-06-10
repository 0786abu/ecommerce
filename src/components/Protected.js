import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protected = ({auth}) => {
  return (
   auth ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default Protected
