import Navbar from "./components/Navbar";
import "./App.css";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation(); // Get current URL path

  // Set background style based on the current route
  const backgroundStyle =
    location.pathname === "/"
      ? { backgroundColor: "#000000" } // Home page: background color
      : {
          backgroundColor: "#000000",
          // backgroundImage: `url(${logo})`, // Other pages: background image
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        };

  return (
    <div style={{ ...backgroundStyle, minHeight: "100vh" }}>
      <header>
        <Navbar />
      </header>
    </div>
  );
}

export default App;
