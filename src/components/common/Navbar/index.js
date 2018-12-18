import React from "react";
import { withRouter } from "react-router-dom";

import PizzeriaLogo from "./PizzeriaLogo";
import "./index.scss";

class Navbar extends React.Component {
  routeToLanding = () => {
    const { history } = this.props;
    history.push("/");
  };

  routeToAbout = () => {
    const { history } = this.props;
    history.push("/about");
  };

  render() {
    return (
      <nav className="navbar-wrapper">
        <div className="navbar-start">
          <PizzeriaLogo
            routeToLanding={this.routeToLanding}
            cssClass="navbar-start__item navbar-start--logo pointer-cursor"
          />
          <span
            className="navbar-start__item pointer-cursor no-highlight"
            onClick={this.routeToLanding}
          >
            Pizzeria
          </span>
        </div>

        <div className="navbar-end">
          <div
            className="navbar-end__item pointer-cursor no-highlight"
            onClick={this.routeToAbout}
          >
            About
          </div>
        </div>
      </nav>
    );
  }
}
export default withRouter(Navbar);
