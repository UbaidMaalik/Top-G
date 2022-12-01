import "./App.css";
import Home from "./pages/Home";
// import Mint from "./pages/Mint";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./componenets/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
