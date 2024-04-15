import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  // State to manage form fields
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // State to manage error messages for each field
  const [errorMessages, setErrorMessages] = useState({
    username: '',
    password: ''
  });

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    const newErrorMessages = {};
    if (!formData.username.trim()) {
      newErrorMessages.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      newErrorMessages.password = 'Password is required';
    }
    setErrorMessages(newErrorMessages);

    // If no errors, submit the form
    if (Object.keys(newErrorMessages).length === 0) {
      try {
        // Send POST request to the specified URL
        const response = await fetch("URL", {
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
          username: '',
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
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className={`form-control ${errorMessages.username ? 'is-invalid' : ''}`}
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                  {errorMessages.username && <div className="invalid-feedback">{errorMessages.username}</div>}
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
