import React from 'react'


function Login() {
    return (
        <div className='container my-5'>
            <form className="form-inline my-2 my-lg-0">
                <div className='login-form'>
                    <label htmlFor='email'>Username</label>
                    <input className="form-control mr-sm-2 my-2" type="text" placeholder="Enter Your Username"  />
                </div>
                <div className='login-form'>
                    <label htmlFor='password'>Password</label>
                    <input className="form-control mr-sm-2 my-2" type="password" placeholder="Enter Your Correct Password"  />
                </div>
                <button className='btn btn-secondary'>Login</button>
            </form>
            <a className='btn-link' href='/register'> Create Your Account? </a>
        </div>
    )
}

export default Login