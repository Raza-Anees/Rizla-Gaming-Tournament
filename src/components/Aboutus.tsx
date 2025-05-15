"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gamepad2, Trophy, Users, Twitch, Calendar, Globe } from "lucide-react"

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("mission")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Team members data
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Founder & Tournament Director",
      bio: "Former esports pro with a passion for creating competitive gaming experiences",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Jamie Chen",
      role: "Lead Streamer",
      bio: "Professional streamer with 5+ years experience in tournament broadcasting",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sasha Williams",
      role: "Community Manager",
      bio: "Building bridges between players, fans, and tournament organizers",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Marcus Johnson",
      role: "Technical Director",
      bio: "Ensuring smooth streaming experiences and tournament operations",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Featured tournaments
  const tournaments = [
    {
      name: "RiZla Masters",
      players: 128,
      prize: "$50,000",
      games: ["Valorant", "CS2", "Apex Legends"],
      icon: Trophy,
    },
    {
      name: "Community Showdown",
      players: 64,
      prize: "$10,000",
      games: ["Fortnite", "Rocket League"],
      icon: Users,
    },
    {
      name: "Pro Circuit",
      players: 32,
      prize: "$25,000",
      games: ["League of Legends", "Dota 2"],
      icon: Globe,
    },
  ]

  // Mouse move effect for the gradient blob
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Intersection observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Tab content
  const tabContent = {
    mission: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-bold text-white">Our Mission</h3>
        <p className="text-gray-300">
          At RiZla, we're dedicated to elevating competitive gaming through world-class tournaments and immersive live
          streaming experiences. We believe in creating platforms where gamers of all levels can showcase their skills,
          connect with a passionate community, and compete for glory.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="text-xl font-semibold text-green-400">Competition</h4>
            <p className="text-gray-300 mt-2">
              Hosting high-stakes tournaments that challenge players to reach their full potential.
            </p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="text-xl font-semibold text-green-400">Community</h4>
            <p className="text-gray-300 mt-2">
              Building a global network of gamers united by their passion for competitive play.
            </p>
          </div>
        </div>
      </motion.div>
    ),
    story: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-bold text-white">Our Story</h3>
        <p className="text-gray-300">
          RiZla was born from a simple idea: create the tournaments we always wanted to compete in. Founded by former
          professional players, we understand what makes a great gaming experience. What started as small local events
          has evolved into a premier destination for competitive gaming worldwide.
        </p>
        <div className="relative h-24 mt-6">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-400 to-purple-500"></div>
          <div className="ml-6 space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-green-400">2021</h4>
              <p className="text-gray-300">Founded with our first local tournament series</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-green-400">2023</h4>
              <p className="text-gray-300">Expanded to global tournaments with professional streaming production</p>
            </div>
          </div>
        </div>
      </motion.div>
    ),
    games: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-bold text-white">Our Games</h3>
        <p className="text-gray-300">
          We host tournaments across a wide range of competitive titles, from fast-paced FPS games to strategic MOBAs
          and everything in between.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="text-xl font-semibold text-green-400">FPS</h4>
            <p className="text-gray-300 mt-2">Valorant, CS2, Apex Legends, Call of Duty</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="text-xl font-semibold text-green-400">MOBA</h4>
            <p className="text-gray-300 mt-2">League of Legends, Dota 2, Heroes of the Storm</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="text-xl font-semibold text-green-400">Battle Royale</h4>
            <p className="text-gray-300 mt-2">Fortnite, PUBG, Warzone</p>
          </div>
        </div>
      </motion.div>
    ),
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/30 to-green-500/30 blur-3xl"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 50 }}
        />
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 blur-3xl" />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header section with animated text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-600">
            About RiZla
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Where competitive gaming meets professional streaming
          </p>
        </motion.div>

        {/* Tabs navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/10 backdrop-blur-md rounded-full p-1">
            {["mission", "story", "games"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-green-500 to-purple-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content with animations */}
        <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <AnimatePresence mode="wait">{tabContent[activeTab as keyof typeof tabContent]}</AnimatePresence>
        </div>

        {/* Featured tournaments section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-600">
            Our Tournaments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tournaments.map((tournament, index) => (
              <motion.div
                key={tournament.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{tournament.name}</h3>
                  <tournament.icon className="w-6 h-6 text-green-400" />
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-300 flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-400" />
                    <span>{tournament.players} Players</span>
                  </p>
                  <p className="text-gray-300 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-green-400" />
                    <span>Prize Pool: {tournament.prize}</span>
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400">Featured Games:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tournament.games.map((game) => (
                      <span key={game} className="px-2 py-1 bg-white/10 rounded-md text-xs text-green-300">
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team section with animated cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-600">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 group"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-1">{member.name}</h3>
                <p className="text-green-400 text-center text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-center text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats section with counter animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CounterCard value={50} label="Tournaments Hosted" icon={Trophy} />
            <CounterCard value={10000} label="Registered Players" icon={Users} />
            <CounterCard value={500000} label="Viewers Monthly" icon={Twitch} />
          </div>
        </motion.div>

        {/* Upcoming events section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-600">
            Upcoming Events
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Summer Championship</h3>
                  <p className="text-green-400">August 15-20, 2023</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Our flagship summer tournament featuring the top teams from around the world competing in Valorant and
                CS2.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-purple-400 font-medium">Prize Pool: $75,000</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-purple-600 text-white text-sm font-medium"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Community Cup</h3>
                  <p className="text-green-400">September 5-7, 2023</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Open tournament for all skill levels with multiple game categories including Fortnite and Rocket League.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-purple-400 font-medium">Prize Pool: $15,000</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-purple-600 text-white text-sm font-medium"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-600">
            Ready to join the competition?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Register for upcoming tournaments or tune in to watch the action live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-purple-600 text-white font-medium text-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <Gamepad2 className="w-5 h-5" />
                Register Now
              </span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-lg border border-white/20"
            >
              <span className="flex items-center justify-center gap-2">
                <Twitch className="w-5 h-5" />
                Watch Streams
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center text-gray-400">
          <p>© 2023 RiZla Gaming Tournaments. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

// Counter animation component
function CounterCard({ value, label, icon: Icon }: { value: number; label: string; icon: any }) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startValue = 0
          const duration = 2000 // ms
          const increment = value / (duration / 16) // 60fps

          const timer = setInterval(() => {
            startValue += increment
            if (startValue > value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(startValue))
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [value])

  return (
    <div ref={counterRef} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
      <Icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
      <h3 className="text-4xl font-bold text-white mb-2">
        {count.toLocaleString()}
        <span className="text-green-400">+</span>
      </h3>
      <p className="text-gray-300">{label}</p>
    </div>
  )
}
