import React from 'react'

function Register() {
    return (
        <div className='container my-5'>
            <form className="form-inline my-2 my-lg-0">
                <div className='register-form'>
                    <label htmlFor='text'>First Name</label>
                    <input className="form-control mr-sm-2 my-2" type="text" placeholder="Enter Your First Name" />
                </div>
                <div className='register-form'>
                    <label htmlFor='text'>Last Name</label>
                    <input className="form-control mr-sm-2 my-2" type="text" placeholder="Enter Your Last Name" />
                </div>
                <div className='register-form'>
                    <label htmlFor='email'>Email</label>
                    <input className="form-control mr-sm-2 my-2" type="email" placeholder="Enter Your Email" />
                </div>
                <div className='register-form'>
                    <label htmlFor='password'>Password</label>
                    <input className="form-control mr-sm-2 my-2" type="password" placeholder="Enter Your Password" />
                </div>
                <div className='register-form'>
                    <label htmlFor='password'>Reconfirm Password</label>
                    <input className="form-control mr-sm-2 my-2" type="password" placeholder="Enter Your Confirm Password" />
                </div>
                <button className='btn btn-secondary'>Register</button>
            </form>
            <a className='btn-link my-3' href='/'> Go Back To Home </a>
        </div>
    )
}

export default Register