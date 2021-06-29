import { ThemeContext } from "../context/context";

const ThemeTogglerButton = () => (
  /*implementing the consumer like in the Home
  component we now acces to the property toggleTheme
  to change the context theme*/
  <ThemeContext.Consumer>
    {({ toggleTheme }) => <button onClick={toggleTheme}>Change Theme</button>}
  </ThemeContext.Consumer>
);

export default ThemeTogglerButton;
