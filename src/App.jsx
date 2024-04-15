import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home/Home';
import LoginPage from './components/loginPage/LoginPage';
import SigninPage from './components/signinPage/SigninPage';
import './App.css';

function App() {
  return (
    <BrowserRouter basename='SplitWise-App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
