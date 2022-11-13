import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./routes/homepage/Home";
import Placetobe from "./routes/placetobe/Placetobe";
const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Placetobe" element={<Placetobe />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
