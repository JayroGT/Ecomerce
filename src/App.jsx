import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./login/Login";
import Footer from "./components/Footer";
import { Register } from "./login/Register";
 
function App() {
  return (
    <> 
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
