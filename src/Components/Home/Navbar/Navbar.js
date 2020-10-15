import React, { useContext } from 'react';
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <Link className="navbar-brand"> <img src={logo} width="150px" alt="" /> </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-3" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-3" to="/portfolio">Our Portfolio</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-3" to="/team">Our Team</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-3" to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/login">
                            {
                                loggedInUser.isSignedIn ? <button type="button" className="btn-brand">Log-out</button>:<button type="button" className="btn-brand">Login</button>
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;