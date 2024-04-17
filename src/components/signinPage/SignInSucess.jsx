import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../navbar/Logo";

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

               <Logo />

               <div className="card position-absolute top-50 start-50 translate-middle p-3" style={{ width: "18rem" }}>
                    <div className="card-img-top border-bottom bg-light p-2" alt="signin-success" >
                         <h4>{currentQuote}</h4>
                    </div>
                    <div className="card-body">
                         <h3 className="card-title">Sign In Successful!</h3>
                         <p className="card-text">login and start adding expenses</p>
                         <Link to="/login"><button className="btn btn-primary mx-2">Login</button></Link>
                    </div>
               </div>
          </>
     );
}

export default SignInSucess;
