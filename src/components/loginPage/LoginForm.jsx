import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const URL = "http://localhost:8080/SplitWise-App/login";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrorMessages = {};
    if (!formData.email.trim()) {
      newErrorMessages.email = 'email is required';
    }
    if (!formData.password.trim()) {
      newErrorMessages.password = 'Password is required';
    }
    setErrorMessages(newErrorMessages);

    if (Object.keys(newErrorMessages).length === 0) {
      try {
        const response = await axios.post(URL, formData, {
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (response.status === 200) {
          console.log("Login successful", response.data);
          setFormData({ email: '', password: '' });
          navigate('/dashboard');
        } else {
          console.error("Login failed:", response.data);
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessages({
          email: 'Username may be incorrect',
          password: 'Password may be incorrect'
        });
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
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
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                      className={`form-control ${errorMessages.password ? 'is-invalid' : ''}`}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                    >
                      {showPassword ? "🐵" : "🙈"}
                    </button>
                  </div>
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

export default LoginForm;
