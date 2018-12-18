import React from "react";

import pizzaProfileImg from "../../assets/images/about-img.jpg";
import "./index.scss";

const AboutPage = () => (
  <div className="about-page-wrapper page-wrapper">
    <div className="about">
      <img
        className="about__img about__item"
        src={pizzaProfileImg}
        alt="profile-pizza-img"
      />
      <h3 className="about__name about__item">Pizzeria</h3>
      <p className="about__desc about__item">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie
        consectetur nunc vitae porttitor. Mauris aliquam eu dolor congue
        elementum. Aenean sed pharetra lacus, facilisis convallis magna. Nam
        rutrum finibus lacinia. In id sodales ipsum. Morbi accumsan sit amet
        purus commodo efficitur. Aenean id lectus non metus dignissim congue.
        Morbi et metus erat. Pellentesque viverra lorem ut porta rutrum. Nunc
        mattis rhoncus massa, faucibus auctor ipsum tincidunt vitae.
      </p>
      <h3 className="about__title about__item">Contacts</h3>
      <p className="about__contacts about__item">
        xxx-xxx-xxxx <br />
        someone@someone.com <br />
        @Someone
      </p>
    </div>
  </div>
);

export default AboutPage;
