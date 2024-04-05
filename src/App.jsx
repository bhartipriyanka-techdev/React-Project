import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminHomePage from './Components/AdminHomePage';
import AdminLogin from './Components/AdminLogin';
import AdminSignUp from './Components/AdminSignUp';
import ErrorPage from './Components/ErrorPage';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path = "/*" element ={<ErrorPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          
          <Route path = "/adminSignUp" element ={<AdminSignUp />} />
          <Route path = "/adminHomePage/*" element ={<AdminHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
