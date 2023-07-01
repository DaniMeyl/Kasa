import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import bannerImage from "../assets/images/IMG.png";

const Home = () => {
  return (
    <div className="main-container">
      <Banner
        title="Chez vous, partout et ailleurs"
        image={bannerImage}
      />
      <Cards/>
      
    </div>
  );
};

export default Home;


