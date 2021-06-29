/*using createContext hook to create the
context object that will provide the global
data to the app*/
import { createContext } from "react";

//simple object to contains the supported themes on the app
export const themes = { light: "light", dark: "dark" };

/* the ThemeContext receives now two properies
Provider: wrapper to pass the global data to all its children
Consumer: wrapper to obtain the data of the provider*/

/*note that the values passed as parameter to createContext
is called defaultValue and its only used when a component does
not have a Provider as parent on the element tree, but is good idea
to pass all the necesary data that would be used in the context
to have a reference of what to use*/

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {}
});
