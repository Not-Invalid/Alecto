import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("home")

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>Alecto</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu=="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("man")}}><Link style={{textDecoration: 'none'}} to='/man'>Man</Link>{menu=="man"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>Women</Link>{menu=="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu=="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=''/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar