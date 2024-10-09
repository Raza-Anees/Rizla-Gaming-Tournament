import Navbar from "./components/Navbar";
import "./App.css";
import { useLocation } from "react-router-dom";
import pubgbg from "./assets/pubgbg.jpg";
import freefirebg from "./assets/freefirebg.jpg";
import tekken8bg from "./assets/tekken8bg.jpg";

function App() {
  const location = useLocation();

  let backgroundStyle = { backgroundColor: "#000000" };
  if (location.pathname === "/") {
    backgroundStyle = { backgroundColor: "#000000" };
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
    <div style={{ ...backgroundStyle, minHeight: "100vh" }}>
      <header>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
