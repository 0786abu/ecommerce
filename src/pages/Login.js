import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({setAuth}) => {
    const [password, setPassword] = useState(true)
    const handle = ()=>{
        setPassword(!password)
    }
  return (
    <div className=' login'>
      <div className="containerr">
  <form action="#">
    <div className="title">Login</div>
    <div className="input-box underline">
      <input type="text" placeholder="Enter Your Email" />
      <div className="underline" />
    </div>
    <div className="input-box pass">
      <input type={password ? "password" : "text"} placeholder="Enter Your Password" />
      {password ? <i className="fa-solid ff fa-eye" onClick={handle}></i> :  <i class="fa-solid ff fa-eye-slash" onClick={handle}></i>}
      
     
      {/* <div className="underline" /> */}
    </div>
    <Link to='/'>
    <div className="input-box button" onClick={()=>setAuth(true)}>
      <input type="submit" name defaultValue="Continue" />
    </div>
    </Link>
  </form>
  <div className="option">or Connect With Social Media</div>
  <div className="twitter">
    <Link to="#"><i className="fab fa-twitter" />Sign in With Twitter</Link>
  </div>
  <div className="facebook">
    <Link to="#"><i className="fab fa-facebook-f" />Sign in With Facebook</Link>
  </div>
</div>

    </div>
  )
}

export default Login
