import logo from "../assets/logo.png";
import Banner from "./Banner";
import Gaming from "./Gaming";
import { Route, Routes, Link } from "react-router-dom";
import Pubg from "./Pubg";

import Tekken8 from "./Tekken8";
import Freefire from "./Freefire";
import Aboutus from "./Aboutus";
import RegisterLogin from "./RegisterLogin";

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
          <li className="cursor-pointer  hover:text-blue-400 transition-colors duration-300 ease-in-out">
            <Link to="/">HOME</Link>
          </li>
          <li className="cursor-pointe  hover:text-blue-400 transition-colors duration-300 ease-in-outr">
            <Link to="gaming">GAMING</Link>
          </li>
          <li className="cursor-pointer  hover:text-blue-400 transition-colors duration-300 ease-in-out">
            <Link to="aboutus">ABOUT US</Link>
          </li>
        </ul>
        <div className="cursor-pointer mt-2  hover:text-blue-400 transition-colors duration-300 ease-in-out text-white ">
          <Link to="register/login">REGISTER/LOGIN</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Banner />} />

        <Route path="/gaming" element={<Gaming />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gaming/pubg" element={<Pubg />} />
        <Route path="/gaming/freefire" element={<Freefire />} />
        <Route path="/gaming/tekken8" element={<Tekken8 />} />
        <Route path="/register/login" element={<RegisterLogin />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
      </Routes>
    </div>
  );
}

export default Navbar;
