import React from 'react'


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand mx-2" href="/"> LORE Form</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/slider">Flower</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown">
                    <button className="btn btn-outline-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                        Check More!
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/login">Login</a>
                        <a className="dropdown-item" href="/register">Register</a>
                    </div>
                </div>
            <div className="form-check form-switch mx-4">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" aria-checked='true' id="flexSwitchCheckDefault" />
            </div>
        </nav>
    )
}

export default Navbar