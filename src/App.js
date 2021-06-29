import { useState } from "react";
import { ThemeContext, themes } from "./context/context";
import Home from "./Home";
import "./styles.css";

/*if your components are based on classes,
retrun will be yout render function and instead
of useState set the values on the state inside the
constructor*/
export default function App() {
  /*setting the theme as a state to make it possible to be
  changebale using the toggleTheme function and not just as
  static property on the Provider prop value*/
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const toggleTheme = () =>
    setCurrentTheme((theme) =>
      theme === themes.light ? themes.dark : themes.light
    );

  return (
    /*the Provider prop value is where all the global data is defined to
    be accesible for all its children using the Consumer*/
    /*all the children will have access to the properties theme, toggleTheme*/
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
}
