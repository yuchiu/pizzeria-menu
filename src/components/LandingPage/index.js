import React from "react";
import pizzaData from "../../assets/json/pizza.json";

import "./index.scss";
import PizzaWrapper from "./PizzaWrapper";

const LandingPage = () => (
  <div className="landing-page page-wrapper">
    <div className="landing-title">Welcome to Pizzerria!</div>
    <PizzaWrapper pizzaData={pizzaData} />
  </div>
);

export default LandingPage;
