import { Link, useLocation } from "react-router-dom";
import '../navbar/Navbar.css';

function Links() {
     const location = useLocation();

     return (
          <div className="row">
               <div className="col">
                    <div className="links p-3">
                         <Link
                              to="/dashboard"
                              className={`btn btn-lg btn-outline-dark mb-2 btn-eager ${location.pathname.startsWith('/dashboard') ? 'active' : ''}`}
                         >
                              Dashboard
                         </Link>
                         <br />
                         <Link
                              to="/recent"
                              className={`btn btn-lg btn-outline-dark mb-2 my-3 btn-eager ${location.pathname.startsWith('/recent') ? 'active' : ''}`}
                         >
                              Recent Txn
                         </Link>
                         <br />
                         <Link
                              to="/allexpense"
                              className={`btn btn-lg btn-outline-dark mb-2 my-3 btn-eager ${location.pathname.startsWith('/allexpense') ? 'active' : ''}`}
                         >
                              All Expense
                         </Link>
                    </div>
               </div>
          </div>
     );
}

export default Links;
