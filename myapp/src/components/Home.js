import React from 'react'

function Home() {
    return (
        <div className='container'>
    
            <div className="card my-5 mx-0">
                <div className="card-body">
                    <h5 className="card-title"> Login/Register Form </h5>
                    <p className="card-text"> This Form is made for validating data. So login if you have already create the account else just make your account.</p>
                    <a href="/login" className="card-link"><button className='btn btn-info'>Sign In</button></a>
                    <a href="/register" className="card-link">Create Your Account</a>
                </div>
            </div></div>
    )
}

export default Home