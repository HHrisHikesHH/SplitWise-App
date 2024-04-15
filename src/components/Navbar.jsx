import { Link } from 'react-router-dom';

function Navbar() {
     return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="container">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                         <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/split-bill-2651079-2198127.png" width="30" height="30" className="d-inline-block align-top rounded-circle" alt="Logo" />
                    </Link>

                    {/* Navbar items */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                         <ul className="navbar-nav">
                              {/* Login button */}
                              <li className="nav-item">
                                   <Link className="nav-link btn btn-outline-primary mx-2" to="/login">Login</Link>
                              </li>
                              {/* Signin button */}
                              <li className="nav-item">
                                   <Link className="nav-link btn btn-outline-primary mx-2" to="/signin">Signin</Link>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
}

export default Navbar;
