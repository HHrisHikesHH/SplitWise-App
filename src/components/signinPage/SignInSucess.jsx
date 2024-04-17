import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../navbar/Logo";
import "../navbar/Navbar.css";

function SignInSucess() {
     // State to hold the quotes
     const [quotes, setQuotes] = useState([]);

     // State to hold the current quote
     const [currentQuote, setCurrentQuote] = useState("");

     // Fetch quotes from JSON file
     useEffect(() => {
          fetch("./quotes.json") // Assuming the JSON file is in the public folder
               .then((response) => response.json())
               .then((data) => {
                    setQuotes(data.quotes);
                    // Set a random quote initially
                    setCurrentQuote(data.quotes[Math.floor(Math.random() * data.quotes.length)]);
               })
               .catch((error) => console.error("Error fetching quotes:", error));
     }, []);

     return (
          <>
               <div className="container-fluid vh-100 d-flex align-items-center justify-content-center ">
                    <div className="card shadow p-4 bg-light" style={{ maxWidth: "400px" }}>
                         <div className="card-body text-center bg-light">
                              <Logo />
                              <div className="mt-4 bg-light">
                                   <h4 className="card-title">{currentQuote}</h4>
                                   <hr />
                                   <h3 className="card-title" style={{ color: 'green' }}>SignIn Successful ✅</h3>
                                   <hr />
                                   <p className="card-text">Login and start adding expenses.</p>
                                   <Link to="/login" className="btn btn-outline-primary btn-lg btn-eager">Login</Link>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default SignInSucess;
