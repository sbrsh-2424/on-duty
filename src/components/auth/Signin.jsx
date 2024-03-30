import React, { useState } from 'react'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className='sign-in-container'>
      <form action="">
        <h1>Log In</h1>
        <input type="email" placeholder='Enter your email' value={email}/>
        <input type="password" placeholder='Enter your password' value={password}/>
      </form>
    </div>
  )
}

export default Signin
