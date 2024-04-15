import { useState } from 'react';
import { Link } from 'react-router-dom';

const URL = "http://localhost:9999/SplitWise-App/login";

function LoginPage() {
  // State to manage form fields
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // State to manage error messages for each field
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: ''
  });

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    const newErrorMessages = {};
    if (!formData.email.trim()) {
      newErrorMessages.email = 'email is required';
    }
    if (!formData.password.trim()) {
      newErrorMessages.password = 'Password is required';
    }
    setErrorMessages(newErrorMessages);

    // If no errors, submit the form
    if (Object.keys(newErrorMessages).length === 0) {
      try {
        // Send POST request to the specified URL
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log("Login successful", data);
        // Clear form fields
        setFormData({
          email: '',
          password: ''
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errorMessages.email ? 'is-invalid' : ''}`}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errorMessages.email && <div className="invalid-feedback">{errorMessages.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errorMessages.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errorMessages.password && <div className="invalid-feedback">{errorMessages.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p className="mt-3">Dont have an account? <Link to="/signin">Signin</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
