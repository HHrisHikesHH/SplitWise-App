import { Link } from "react-router-dom"

import '../navbar/Navbar.css'

function TwoButtons() {
     return (
          <>
               <div className="d-flex align-items-center container">
                    <Link to={"/addexpense"} className="btn btn-outline-danger my-3 mx-4 mb-3 px-4 py-2 btn-eager">
                         Add Expense
                    </Link>

                    <Link to={"/settleup"} className="btn btn-outline-success my-3 mx-4 mb-3 px-4 py-2 btn-eager">
                         Settle Up
                    </Link>
               </div>

          </>

     )
}

export default TwoButtons