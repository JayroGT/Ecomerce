import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./pages/login/Login";
import Footer from "./components/Footer";
import { Register } from "./pages/login/Register";
import { Account } from "./pages/Account";
import { useSelector } from "react-redux";
 
function App() { 
  
  return (
    <> 

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer/>
      </Router> 
    :
    </>
  );
}

export default App;
