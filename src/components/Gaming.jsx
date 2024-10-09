import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import pubg2 from "../assets/pubg2.png";
import freefire2 from "../assets/freefire2.png";
import tekken8 from "../assets/tekken82.png";
import { Link } from "react-router-dom";

function Gaming() {
  useGSAP(() => {
    gsap.from(".word", {
      opacity: 0, // Start from invisible
      duration: 2, // 2 seconds to fully appear
      ease: "power2.out",
    });

    gsap.from(".word1", {
      opacity: 0, // Start from invisible
      duration: 2.4, // 2 seconds to fully appear
      ease: "power2.out",
    });
    gsap.from(".word2", {
      opacity: 0, // Start from invisible
      duration: 2.8, // 2 seconds to fully appear
      ease: "power2.out",
    });
    gsap.from(".word3", {
      opacity: 0, // Start from invisible
      duration: 3.2, // 2 seconds to fully appear
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <div className="text-center mt-8 font-extrabold text-4xl ">
        <span className="word text-white">WELCOME </span>
        <span className="word1 text-white">TO </span>
        <span className="word2 text-white">THE </span>
        <span className="word3 text-white">BATTLEFIELD </span>
      </div>
      <div className="text-center mt-6 font-bold text-xl ">
        <span className="word1 text-white">SELECT </span>
        <span className="word2 text-white">YOUR </span>
        <span className="word3 text-white">GAME </span>
      </div>
      <div className="flex flex-wrap justify-center mt-20 ">
        <Link to="pubg">
          <img
            className="word4 h-48 sm:h-60 md:h-72 lg:h-80 transform hover:scale-110 hover:opacity-90 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
            src={pubg2}
            alt="PUBG"
          />
        </Link>
        <Link to="freefire">
          <img
            className="word4 h-48 sm:h-60 md:h-72 lg:h-80 transform hover:scale-110 hover:opacity-90 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
            src={freefire2}
            alt="Free Fire"
          />
        </Link>
        <Link to="tekken8">
          <img
            className="word4 h-48 sm:h-60 md:h-72 lg:h-80 transform hover:scale-110 hover:opacity-90 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
            src={tekken8}
            alt="Tekken 8"
          />
        </Link>
      </div>
    </>
  );
}

export default Gaming;
