import logo from "../assets/logo.png";
import menu from "../assets/manuicon.png";
import Banner from "./Banner";
import Gaming from "./Gaming";
import { Route, Routes, Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav
        className="flex justify-between  px-4  "
        style={{ backgroundColor: "#2E2E2E" }}
      >
        <h1 className="py-2 font-semibold text-white">R</h1>
        <img className="h-full max-h-10 " src={logo} alt="Logo" />
        <div className="flex space-x-2 font-semibold text-white">
          <h1 className="py-2 ">Z</h1>
          <h1 className="py-2 ">L</h1>
          <h1 className="py-2 ">A</h1>
        </div>

        <ul className="flex w-full justify-center space-x-4 py-2 font-semibold text-white ">
          <li className="cursor-pointer">
            <Link to="/">HOME</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/gaming">GAMING</Link>
          </li>
          <li className="cursor-pointer">ABOUT US</li>
        </ul>
        <div className="cursor-pointer py-3 ">
          <img className="h-full max-h-4 " src={menu} alt="manu" />
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Banner />} />

        <Route path="/gaming" element={<Gaming />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
      </Routes>
    </div>
  );
}

export default Navbar;
