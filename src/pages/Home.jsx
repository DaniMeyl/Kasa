import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import backgroundImage from "../assets/images/IMG.png";

const Home = () => {
  return (
    <div className="home-container">
      <Banner
        title="Chez vous, partout et ailleurs"
        imageUrl={backgroundImage}
      />
      <Gallery/>
      
    </div>
  );
};

export default Home;