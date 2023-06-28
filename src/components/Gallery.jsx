import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";

const Acceuil = () => {
  return (
    <section className="gallery">
      {data.map((data, index) => (
        <Link
          to={"/annonces/" + data.id}
          key={index}
          style={{ backgroundImage: `url(${data.cover})` }}
         /* style={{ backgroundImage: "url(" + obj.cover + ")" }}*/
        >
          <h3>{data.title}</h3>
        </Link>
      ))}
    </section>
  );
};

export default Acceuil;