import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import bannerImage from "../assets/images/IMG.png";

const Home = () => {
  return (
    <div className="main-container">
      <Banner
        title="Chez vous, partout et ailleurs"
        image={bannerImage}
      />
      <Gallery/>
      
    </div>
  );
};

export default Home;


