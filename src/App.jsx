import Navbar from "./components/Navbar";
import "./App.css";
import { ThemeContext } from "./store/ThemeContext";
import { useContext } from "react";

function App() {
  const { backgroundStyle } = useContext(ThemeContext);
  return (
    <div style={{ ...backgroundStyle, minHeight: "100vh" }}>
      <header>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
