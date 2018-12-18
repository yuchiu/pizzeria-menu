import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Button } from "../common";

class PizzaWrapper extends React.Component {
  routeToPizza = id => {
    const { history } = this.props;
    history.push(`/pizza/${id}`);
  };

  render() {
    const { pizzaData } = this.props;
    return (
      <div className="pizza-wrapper">
        {pizzaData.map((pizza, i) => (
          <div className="pizza" key={`pizza-${i}`}>
            <div className="pizza__img-wrapper">
              <img
                src={pizza.imgUrl}
                className="pizza__img-wrapper__thumbnail"
                alt="pizza-thumbnail"
              />
            </div>
            <h4 className="pizza__name">{pizza.name}</h4>
            <div className="pizza__details">
              <p className="pizza__details__price pizza__details__item">
                Price: {pizza.price}
              </p>
              <p className="pizza__details__calories pizza__details__item">
                Calories: {pizza.calories}
              </p>
            </div>
            <Button
              text="View"
              cssClass="pizza__details__btn "
              handleClick={this.routeToPizza.bind(this, pizza.id)}
            />
          </div>
        ))}
      </div>
    );
  }
}

PizzaWrapper.propTypes = {
  pizzaData: PropTypes.array.isRequired
};
export default withRouter(PizzaWrapper);
