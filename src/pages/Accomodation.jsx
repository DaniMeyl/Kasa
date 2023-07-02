import React from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Slider from "../components/Slider";
import Data from "../data/data.json";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";

const Accomodation = () => {
  const { id } = useParams();
  const data = Data.find((item) => item.id === id);

  if (!data) {
    return <Navigate to="/Error" />;
  }

  return (
    <div className="main-container">
      <div className="accomodation-container">
        <Slider
          images={data.pictures}
          className="slider"
        />

        <div className="infos-container">
          <div className="accomodation-header-tags">
            <div className="accomodation-header">
              <h1 className="accomodation-title">{data.title}</h1>
              <h2 className="accomodation-location">{data.location}</h2>
            </div>
            <ul className="tags">
              {data.tags.map((tag, index) => (
                <li
                  className="accomodation-tag"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="accomodation-user-stars">
            <div className="user">
              <div className="accomodation-host">
                <p className="name">{data.host.name.split(" ")[0]}</p>
                <p className="lastname">{data.host.name.split(" ")[1]}</p>
              </div>
              <img
                src={data.host.picture}
                alt={`profil de ${data.host.name}`}
              />
            </div>
            <Rating />
          </div>
        </div>

        <div className="collapse-container">
          <div className="description">
            {Data[0] && (
              <Collapse label="Description">{data.description}</Collapse>
            )}
          </div>

          <div className="equipment">
            {Data[0] && (
              <Collapse label="Equipements">
                {data.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </Collapse>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
