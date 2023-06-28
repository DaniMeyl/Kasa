import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import "./style/main.scss";
import Home from "./pages/home";
import Accomodation from "./pages/Accomodation";
import About from "./pages/about";
import Error from "./pages/Error";
import Footer from "./components/Footer";



const App = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/annonces/:id" element={<Accomodation />}/>
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
