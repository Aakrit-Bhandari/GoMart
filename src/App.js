import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// Importing needed files
import HomePage from './Components/HomePage'; 
import Navbar from './Components/Navbar';
import AboutPage from './Components/AboutPage';
import SignupPage from './Components/SigninPage';
import Dashboard from './Components/DashBoard';
import CartandOrders from './Components/CartPage';
import OneTimePassword from './Components/OtpPage';
function Layout() {
  const location = useLocation();
  const shouldShowNavbar =location.pathname!=='/otp'&& location.pathname !== '/signin' &&location.pathname!=='/dashboard' ;

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="signin" element={<SignupPage />} />
        <Route path="otp" element={<OneTimePassword/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/cart" element={<CartandOrders/>}/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
