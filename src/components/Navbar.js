import React from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = ()=> {
    let location = useLocation();
    let history = useHistory();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        history.push("/login");
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <Link className="navbar-brand mx-1" to="/">Khabar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        {localStorage.getItem('token') && <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
        </div> }
        {!localStorage.getItem('token') ? <form className="form-inline">
                <Link className="btn btn-light btn-pull-right mx-1 my-sm-0" to="/login" role="button">Login</Link>
                <Link className="btn btn-light btn-pull-right mx-1 my-sm-0" to="/signup" role="button">Signup</Link>
            </form>: <button onClick={handleLogout} className="btn btn-light mx-2">Logout</button>}
        </nav>
    )
}

export default Navbar
