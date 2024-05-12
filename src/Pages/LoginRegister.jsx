import React from 'react'
import './css/LoginRegister.css'

const LoginRegister = () => {
  return (
    <div className='loginregister'>
      <div className="loginregister-container">
        <h1>Sign Up</h1>
        <div className="loginregister-fields">
          <input type="text" name="" id="" placeholder='Username'/>
          <input type="email" name="" id="" placeholder='Email Address' />
          <input type="password" name="" id="" placeholder='Password' />
        </div>
        <button>Register</button>
        <p className="loginregister-login">Already Have Account? <span>Login Here</span></p>
        <div className="loginregister-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continue, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginRegister