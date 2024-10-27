import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../store/ThemeContext";
import { useContext } from "react";

const RegisterLogin = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  // const [name, setname] = useState("");
  let { setDisplayName } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const loginRef = useRef(null);
  const registerRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/createuser",
        formData
      );
      console.log("Registration successful", response.data);
    } catch (error) {
      console.error(
        "Registration failed",
        error.response?.data?.errors || error.message
      );
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const { email, password } = formData;

    try {
      const response = await fetch("http://localhost:8000/login", {
        // Adjust the URL if necessary
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login successful", data);
        // Handle successful login (e.g., store token, redirect)
        const { username } = data;
        setDisplayName(username);
        navigate("/");
      } else {
        console.error("Login failed", data);
        // Handle login failure (e.g., show error message)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useGSAP(() => {
    if (isLogin) {
      gsap.to(".loginForm", { x: 0, opacity: 1, duration: 0.5 });
      gsap.to(".registerForm", { x: 100, opacity: 0, duration: 0.5 });
    } else {
      gsap.to(".registerForm", { x: 0, opacity: 1, duration: 0.5 });
      gsap.to(".loginForm", { x: -100, opacity: 0, duration: 0.5 });
    }
  }, [isLogin]);

  return (
    <div className="flex flex-col items-center  ">
      <div className="flex space-x-4 mt-10">
        <button
          onClick={() => setIsLogin(true)}
          className={`p-2 px-4 rounded-lg shadow-md text-white transition ${
            isLogin ? "bg-blue-600" : "bg-blue-400 hover:bg-blue-500"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`p-2 px-4 rounded-lg shadow-md text-white transition ${
            !isLogin ? "bg-green-600" : "bg-green-400 hover:bg-green-500"
          }`}
        >
          Register
        </button>
      </div>

      <div className="relative mt-8 w-full max-w-md px-8 py-6 bg-navbar-color rounded-lg shadow-xl">
        {/* Login Form */}
        <div
          ref={loginRef}
          className="loginForm transition-opacity duration-500"
          style={{ display: isLogin ? "block" : "none" }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Login
          </h2>
          <form
            onSubmit={handleLoginSubmit}
            className="flex flex-col space-y-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full p-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Registration Form */}
        <div
          ref={registerRef}
          className="registerForm transition-opacity duration-500"
          style={{ display: !isLogin ? "block" : "none" }}
        >
          <h2 className="text-3xl font-bold text-center text-green-600 mb-4">
            Register
          </h2>
          <form
            onSubmit={handleRegisterSubmit}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            />
            <button
              type="submit"
              className="w-full p-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
