import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home/Home';
import LoginPage from './components/loginPage/LoginPage';
import SigninPage from './components/signinPage/SigninPage';
import SignInSuccess from "./components/signinPage/SignInSucess";
import DashboardPage from './components/dashboard/DashboardPage';
import RecentTxPage from './components/recentTx/RecentTxPage';
import ExpensePage from './components/expense/ExpensePage';
import './App.css';

function App() {
  return (
    <BrowserRouter basename='SplitWise-App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/recent" element={<RecentTxPage />} />
        <Route path="/allexpense" element={<ExpensePage />} />
        <Route path="/signin-success" element={<SignInSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
