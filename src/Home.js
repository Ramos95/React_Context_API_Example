import React from "react";
import ThemeTogglerButton from "./components/theme-toggler-button";
import ThemePanel from "./components/theme-panel";
import { ThemeContext } from "./context/context";
import "./assets/app.css";

const Home = () => (
  /*using the consumer we can use a function that
  recevies the value of the provider to the consumer
  and use them to set element properties*/

  /*in this case we deconstruct the value to obtain the
  theme property and set the theme style to the component*/
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div className={`home ${theme}`}>
        <div className="header">
          <h3>Using {theme} theme</h3>
        </div>
        <div className="content">
          <ThemePanel />
          <ThemeTogglerButton />
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
);

export default Home;
