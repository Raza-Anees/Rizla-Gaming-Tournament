import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import pubgbg from "../assets/pubgbg.jpg";
import freefirebg from "../assets/freefirebg.jpg";
import tekken8bg from "../assets/tekken8bg.jpg";

export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
  backgroundStyle: {},
});

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("#000000");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme == "#000000" ? "#ff0000" : "#000000"));
  };

  const location = useLocation();
  // Get the current theme from context

  let backgroundStyle = { backgroundColor: theme }; // Use the theme as background color

  if (location.pathname === "/") {
    backgroundStyle = { backgroundColor: theme }; // Use theme color
  } else if (location.pathname === "/register/login") {
    backgroundStyle = { backgroundColor: theme };
  } else if (location.pathname === "/gaming/pubg") {
    backgroundStyle = {
      backgroundImage: `url(${pubgbg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  } else if (location.pathname === "/gaming/freefire") {
    backgroundStyle = {
      backgroundImage: `url(${freefirebg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  } else if (location.pathname === "/gaming/tekken8") {
    backgroundStyle = {
      backgroundImage: `url(${tekken8bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, backgroundStyle }}>
      {children}
    </ThemeContext.Provider>
  );
}
