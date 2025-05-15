"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../store/ThemeContext"
import { Shield, Sword, User, Mail, Lock, Gamepad2 } from "lucide-react"

// Custom Button Component
const GamingButton = ({ children, type = "button", onClick, disabled = false, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  )
}

// Custom Input Component
const GamingInput = ({ type = "text", name, placeholder, value, onChange, className = "", required = false }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-200 ${className}`}
    />
  )
}

export default function GamingAuthPortal() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const { setDisplayName } = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const containerRef = useRef(null)
  const loginRef = useRef(null)
  const registerRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post("http://localhost:8000/createuser", formData)
      console.log("Registration successful", response.data)
      // Show success animation
      gsap.to(".success-icon", {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        onComplete: () => {
          setIsLogin(true)
          setIsLoading(false)
        },
      })
    } catch (error) {
      console.error("Registration failed", error.response?.data?.errors || error.message)
      setIsLoading(false)
    }
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const { email, password } = formData

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()
      if (response.ok) {
        console.log("Login successful", data)
        const { username } = data
        setDisplayName(username)

        // Success animation before redirect
        gsap.to(".success-icon", {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          onComplete: () => {
            navigate("/")
          },
        })
      } else {
        console.error("Login failed", data)
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Error:", error)
      setIsLoading(false)
    }
  }

  // Background animation
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 })
    tl.to(".bg-glow", {
      boxShadow: "0 0 30px 5px rgba(255, 0, 128, 0.6)",
      duration: 2,
      ease: "sine.inOut",
    })
    tl.to(".bg-glow", {
      boxShadow: "0 0 15px 2px rgba(0, 255, 255, 0.4)",
      duration: 2,
      ease: "sine.inOut",
    })

    return () => tl.kill()
  }, [])

  useGSAP(() => {
    // Initial animations
    gsap.from(containerRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })

    // Toggle animations
    if (isLogin) {
      gsap.to(loginRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        display: "block",
      })
      gsap.to(registerRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        display: "none",
      })
    } else {
      gsap.to(registerRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        display: "block",
      })
      gsap.to(loginRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        display: "none",
      })
    }
  }, [isLogin])

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/90 z-0"></div>
      <div className="bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rounded-full opacity-20 z-0"></div>

      {/* Gaming logo */}
      <div className="mb-8 z-10">
        <div className="flex items-center justify-center gap-2">
          <Gamepad2 className="h-10 w-10 text-purple-500" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            BATTLE<span className="text-cyan-400">ZONE</span>
          </h1>
        </div>
        <p className="text-center text-gray-400 mt-2">Join the ultimate gaming tournament</p>
      </div>

      {/* Toggle buttons */}
      <div className="flex space-x-2 mb-6 z-10 relative">
        <div className="absolute inset-0 bg-gray-800/50 rounded-lg backdrop-blur-sm -m-1"></div>
        <GamingButton
          onClick={() => setIsLogin(true)}
          className={`relative z-10 ${isLogin ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_10px_rgba(124,58,237,0.5)]" : "bg-gray-800 text-gray-300 hover:text-white"}`}
        >
          <Shield className="mr-2 h-4 w-4" />
          Login
        </GamingButton>
        <GamingButton
          onClick={() => setIsLogin(false)}
          className={`relative z-10 ${!isLogin ? "bg-gradient-to-r from-cyan-600 to-emerald-600 shadow-[0_0_10px_rgba(6,182,212,0.5)]" : "bg-gray-800 text-gray-300 hover:text-white"}`}
        >
          <Sword className="mr-2 h-4 w-4" />
          Register
        </GamingButton>
      </div>

      {/* Main container */}
      <div ref={containerRef} className="w-full max-w-md relative z-10">
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(124,58,237,0.5)] z-0"></div>

        {/* Login Form */}
        <div ref={loginRef} className="relative z-10 p-8">
          <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Enter The Arena
          </h2>
          <form onSubmit={handleLoginSubmit} className="flex flex-col space-y-5">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <GamingInput
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10 focus:ring-purple-500"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <GamingInput
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 focus:ring-purple-500"
                required
              />
            </div>
            <GamingButton
              type="submit"
              disabled={isLoading}
              className="w-full py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-bold text-lg shadow-[0_0_10px_rgba(124,58,237,0.5)] hover:shadow-[0_0_20px_rgba(124,58,237,0.7)]"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Logging in...
                </div>
              ) : (
                "BATTLE LOGIN"
              )}
            </GamingButton>
            <p className="text-center text-gray-400 text-sm">
              New challenger?{" "}
              <button type="button" onClick={() => setIsLogin(false)} className="text-cyan-400 hover:text-cyan-300">
                Register now
              </button>
            </p>
          </form>
        </div>

        {/* Registration Form */}
        <div ref={registerRef} className="relative z-10 p-8">
          <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500">
            Join The Tournament
          </h2>
          <form onSubmit={handleRegisterSubmit} className="flex flex-col space-y-5">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <GamingInput
                type="text"
                name="name"
                placeholder="Gamer Tag"
                value={formData.name}
                onChange={handleInputChange}
                className="pl-10 focus:ring-cyan-500"
                required
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <GamingInput
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10 focus:ring-cyan-500"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <GamingInput
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 focus:ring-cyan-500"
                required
              />
            </div>
            <GamingButton
              type="submit"
              disabled={isLoading}
              className="w-full py-6 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 font-bold text-lg shadow-[0_0_10px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Registering...
                </div>
              ) : (
                "JOIN THE BATTLE"
              )}
            </GamingButton>
            <p className="text-center text-gray-400 text-sm">
              Already a warrior?{" "}
              <button type="button" onClick={() => setIsLogin(true)} className="text-purple-400 hover:text-purple-300">
                Login here
              </button>
            </p>
          </form>
        </div>

        {/* Success icon (hidden initially) */}
        <div className="success-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 z-20">
          <div className="bg-green-500 rounded-full p-4 shadow-[0_0_20px_rgba(34,197,94,0.7)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
