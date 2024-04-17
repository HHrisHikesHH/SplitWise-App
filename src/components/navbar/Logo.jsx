
import { Link } from 'react-router-dom'
function Logo() {
     return (
          <nav className="navbar navbar-expand-lg navbar-light mb-3 mx-5" style={{ paddingTop: '20px', paddingBottom: '20px', height: '50px', marginTop: '40px', width: '90%' }}>
               <div className="container">

                    <Link className="navbar-brand" to="/">
                         <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/split-bill-2651079-2198127.png" width="70" height="70" className="d-inline-block align-top rounded-circle mx-5" alt="Logo" />
                    </Link>

               </div>
          </nav>

     )
}

export default Logo