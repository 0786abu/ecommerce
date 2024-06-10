import React, { useState } from 'react'
import "../style/navbar.css"
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { selectcart } from '../product/productSlice';


const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const cart = useSelector(selectcart)
    console.log(cart)
   
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
            <Link to='/'><h2 className=' text-2xl font-bold cursor-pointer'>AB-MART</h2></Link>
        </div>
        <ul id="menu" className={menu ? "open" : "close"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/laptop">Laptops</Link></li>
            <li><Link to="/mobile">Mobile</Link></li>
            <li><Link to="/airpord">Airpords</Link></li>
            <li><Link to="/speaker">Speakers</Link></li>
            <li><Link to="/tv">Led</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="account flex justify-center items-center">
        <Link to='/login'><i className="fa-solid fa-user-plus hover:text-yellow-400 duration-300"></i></Link>
        <Link to='/shopping'  className=' hover:text-yellow-400 duration-300'>
        <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon/>
      </Badge>
        </Link>

        <i className="fa-solid fa-bars" id='menubtn' onClick={()=>setMenu(!menu)}></i>
        <i className="fa-solid fa-xmark" id='closebtn'></i>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
