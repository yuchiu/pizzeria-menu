import React from "react";

import "./index.scss";
import pizzaData from "../../assets/json/pizza.json";
import PizzaPanel from "./PizzaPanel";
import PizzaNotFound from "./PizzaNotFound";
import LoadingPizza from "./LoadingPizza";

class PizzaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      selectedPizza: null
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { pizzaId }
      }
    } = this.props;
    /*
    * Find currently selected Pizza with current url param 
    */
    const selectedPizza = pizzaData.find(
      item => parseInt(item.id, 10) === parseInt(pizzaId, 10)
    );
    this.setState({
      isLoading: false,
      selectedPizza
    });
  }

  render() {
    const { isLoading, selectedPizza } = this.state;
    return (
      <div className="pizza-page-wrapper page-wrapper">
        {isLoading && <LoadingPizza />}
        {!isLoading && (
          <React.Fragment>
            {selectedPizza ? (
              <PizzaPanel pizza={selectedPizza} />
            ) : (
              <PizzaNotFound />
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default PizzaPage;
