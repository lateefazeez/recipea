import { createContext } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

  return ( 
    <ThemeContext.Provider valuer={{ color: "blue" }}>
      { children }
    </ThemeContext.Provider>
   );
}
 
export default ThemeProvider;