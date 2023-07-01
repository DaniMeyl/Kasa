import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";

const Cards = () => {
  return (
    <section className="gallery">
      {data.map((data, index) => (
        <Link
          to={"/accomodation/" + data.id}
          key={index}
          style={{ backgroundImage: `url(${data.cover})` }}
        >
          <h3>{data.title}</h3>
        </Link>
      ))}
    </section>
  );
};

export default Cards;