import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home/Home';
import LoginPage from './components/loginPage/LoginPage';
import SigninPage from './components/signinPage/SigninPage';
import SignInSuccess from "./components/signinPage/SignInSucess";
import './App.css';
import DashboardPage from './components/dashboard/DashboardPage';

function App() {
  return (
    <BrowserRouter basename='SplitWise-App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/signin-success" element={<SignInSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
