import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import bannerImage from "../assets/images/banner2.png";

const About = () => {
  return (
    <div className="main-container">
      <Banner
        title=""
        image={bannerImage}
      />
      <section className="about">
        <Collapse label="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse label="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Collapse>
        <Collapse label="Service">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </Collapse>
        <Collapse
          label="Sécurité"
          id="collapse-end"
        >
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également égaleemnt des
          ateliers sur la sécurité domestique pour nos hôtes.
        </Collapse>
      </section>
    </div>
  );
};

export default About;
