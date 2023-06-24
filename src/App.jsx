import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./style/main.scss";
import Home from "./pages/Home.jsx";
//import Gallery from "./pages/Gallery";
//import About from "./pages/about";
//import Error from "./pages/Error";
import Footer from "./components/Footer";
import "./style/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
