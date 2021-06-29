/*we can also use the useContextHook to access
to the context on the component functions and not on
only on the Consumer*/
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext, themes } from "../context/context";

const ThemePanel = () => {
  //accesing the theme property from the context
  const { theme } = useContext(ThemeContext);

  /*changing the value of the state based on the 
  context theme value*/
  const [icon, setIcon] = useState("");

  /*set the icon value when component mounts and when
  theme changes*/
  useEffect(() => {
    setIcon(String.fromCodePoint(theme === themes.light ? 0x1f31e : 0x1f319));
  }, [theme]);

  return (
    <div className="panel">
      A {theme} {icon} theme with react context API{" "}
      <span id="atom-icon">&#9883;</span>
    </div>
  );
};

export default ThemePanel;
