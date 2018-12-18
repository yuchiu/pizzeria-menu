import React from "react";
import PropTypes from "prop-types";

import { Button } from "../common";

const PizzaPanel = ({ pizza }) => (
  <div className="pizza-panel">
    <div className="pizza-panel-start">
      <div className="pizza-panel-start__img-wrapper">
        <img
          src={pizza.imgUrl}
          className="pizza-panel-start__img-wrapper__thumbnail"
          alt="pizza-thumbnail"
        />
      </div>
    </div>
    <div className="pizza-panel-end pizza-panel-end__item">
      <h4 className="pizza-panel-end__name  pizza-panel-end__item">
        {pizza.name}
      </h4>
      <div className="pizza-panel-end__details  pizza-panel-end__item">
        <p className="pizza-panel-end__details__price pizza-panel-end__details__item">
          Price: {pizza.price}
        </p>
        <p className="pizza-panel-end__details__calories pizza-panel-end__details__item">
          Calories: {pizza.calories}
        </p>
      </div>
      <p className="pizza-panel-end__desc  pizza-panel-end__item">
        Description: {pizza.desc}
      </p>
      <Button
        text="Order Now!"
        cssClass="pizza-panel-end__btn  pizza-panel-end__item"
      />
    </div>
  </div>
);

PizzaPanel.propTypes = {
  pizza: PropTypes.object.isRequired
};

export default PizzaPanel;
