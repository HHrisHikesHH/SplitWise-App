import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
function Navbar() {
     return (
          <nav className="navbar navbar-expand-lg navbar-light mb-3" style={{ paddingTop: '20px', paddingBottom: '20px', height: '50px', marginTop: '30px', width: '90%' }}>
               <div className="container">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                         <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/split-bill-2651079-2198127.png" width="70" height="70" className="d-inline-block align-top rounded-circle mx-5" alt="Logo" />
                    </Link>

                    {/* Navbar items */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                         <ul className="navbar-nav ">
                              {/* Login button */}
                              <li className="nav-item btn-eager">
                                   <Link to="/login">
                                        <button type="button" className="btn btn-outline-primary mx-3 ">LogIn</button>
                                   </Link>
                              </li>
                              {/* Signin button */}
                              <li className="nav-item btn-eager">
                                   <Link to="/signin">
                                        <button type="button" className="btn btn-outline-primary ">SignIn</button>
                                   </Link>
                              </li>
                         </ul>
                    </div>

               </div>
          </nav>
     );
}

export default Navbar;
