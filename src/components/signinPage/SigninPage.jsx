import { useState } from 'react';

const URL = "http://localhost:9999/SplitWise-App/signin";

function SigninPage() {
  // State to manage form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // State to manage error messages for each field
  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validation
    const newErrorMessages = {};
    if (!formData.firstName) {
      newErrorMessages.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      newErrorMessages.lastName = 'Last name is required';
    }
    if (!formData.email) {
      newErrorMessages.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrorMessages.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrorMessages.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrorMessages.password = 'Password must be at least 8 characters long';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrorMessages.password = 'Password must contain at least one uppercase letter';
    } else if (!/[a-z]/.test(formData.password)) {
      newErrorMessages.password = 'Password must contain at least one lowercase letter';
    } else if (!/\d/.test(formData.password)) {
      newErrorMessages.password = 'Password must contain at least one number';
    } else if (!/[^A-Za-z0-9]/.test(formData.password)) {
      newErrorMessages.password = 'Password must contain at least one special character';
    }
    if (!formData.confirmPassword) {
      newErrorMessages.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrorMessages.confirmPassword = 'Passwords do not match';
    }
    setErrorMessages(newErrorMessages);

    // If no errors, submit the form
    if (Object.keys(newErrorMessages).length === 0) {
      try {
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Form Data:', data);
          // Clear form fields
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
              <h2 className="card-title">Sign In</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`form-control ${errorMessages.firstName ? 'is-invalid' : ''}`}
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {errorMessages.firstName && <div className="invalid-feedback">{errorMessages.firstName}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`form-control ${errorMessages.lastName ? 'is-invalid' : ''}`}
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {errorMessages.lastName && <div className="invalid-feedback">{errorMessages.lastName}</div>}
                </div>
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
                    id="password"
                    name="password"
                    className={`form-control ${errorMessages.password ? 'is-invalid' : ''}`}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errorMessages.password && <div className="invalid-feedback">{errorMessages.password}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`form-control ${errorMessages.confirmPassword ? 'is-invalid' : ''}`}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  {errorMessages.confirmPassword && <div className="invalid-feedback">{errorMessages.confirmPassword}</div>}
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
