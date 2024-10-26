import { useState } from "react";
import axios from "axios";
import SuccessModal from "./SuccessModal";
function Freefire() {
  const [Squad, setSquadName] = useState("");
  const something = "FreeFire";
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const [showModal, setShowModal] = useState(false);

  const postData = async () => {
    if (!Squad || !player1 || !player2 || !player3 || !player4) {
      alert("All fields must be filled in before saving data.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/gaming/freefire",
        {
          Squad: Squad,
          Player1: player1,
          Player2: player2,
          Player3: player3,
          Player4: player4,
        }
      );
      console.log(response.data);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
      <div className="flex justify-center">
        <div className="mt-8 xl:mt-36  md:mt-36 sm:mt-36  space-y-3">
          <div className=" xl:flex xl:space-x-2 md:flex md:space-x-2 sm:flex sm:space-x-2 ">
            <div className="space-y-2 ">
              <label
                className="text-white font-bold text-lg tracking-wide mb-2 inline-block 
                 hover:text-blue-400 transition-colors duration-300 ease-in-out"
              >
                Game name:
              </label>
              <br />
              <input
                className="bg-navbar-color text-white border border-gray-300 rounded-lg py-2 px-4 
             shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition duration-300 ease-in-out"
                defaultValue={something}
                readOnly={true}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-white font-bold text-lg tracking-wide mb-2 inline-block 
                 hover:text-blue-400 transition-colors duration-300 ease-in-out "
              >
                Squad Name:
              </label>
              <br />
              <input
                className="bg-navbar-color text-white border border-gray-300 rounded-lg py-2 px-4 
             shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition duration-300 ease-in-outbg-navbar-color "
                value={Squad}
                onChange={(e) => setSquadName(e.target.value)}
              />
            </div>
          </div>
          <div className="xl:flex xl:space-x-2 md:flex md:space-x-2 sm:flex sm:space-x-2">
            <div className="space-y-2">
              <label
                className="text-white font-bold text-lg tracking-wide mb-2 inline-block 
                 hover:text-blue-400 transition-colors duration-300 ease-in-out "
              >
                Player1:
              </label>
              <br />
              <input
                className="bg-navbar-color text-white border border-gray-300 rounded-lg py-2 px-4 
             shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition duration-300 ease-in-outbg-navbar-color "
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-white font-bold text-lg tracking-wide mb-2 inline-block 
                 hover:text-blue-400 transition-colors duration-300 ease-in-out "
              >
                Player2:
              </label>
              <br />
              <input
                className="bg-navbar-color text-white border border-gray-300 rounded-lg py-2 px-4 
             shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition duration-300 ease-in-outbg-navbar-color "
                value={player2}
                onChange={(e) => setPlayer2(e.target.value)}
              />
            </div>
          </div>
          <div className="xl:flex xl:space-x-2 md:flex md:space-x-2 sm:flex sm:space-x-2">
            <div className="space-y-2">
              <label
                className="text-white font-bold text-lg tracking-wide mb-2 inline-block 
                 hover:text-blue-400 transition-colors duration-300 ease-in-out "
              >
                Player3:
              </label>
              <br />
              <input
                className="bg-navbar-color text-white border border-gray-300 rounded-lg py-2 px-4 
             shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition duration-300 ease-in-outbg-navbar-color "
                value={player3}
                onChange={(e) => setPlayer3(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-white font-bold text-lg tracking-wide mb-2 inline-block 
                 hover:text-blue-400 transition-colors duration-300 ease-in-out "
              >
                Player4:
              </label>
              <br />
              <input
                className="bg-navbar-color text-white border border-gray-300 rounded-lg py-2 px-4 
             shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition duration-300 ease-in-outbg-navbar-color "
                value={player4}
                onChange={(e) => setPlayer4(e.target.value)}
              />
            </div>
          </div>
          <button
            className="bg-white hover:bg-navbar-color text-black font-bold py-2 px-4 rounded ml-44 "
            onClick={postData}
          >
            Submit
          </button>
        </div>

        {/* {firstName !== "" && (
        <p className="text-white">Your name is {firstName}.</p>
      )} */}
      </div>
    </>
  );
}

export default Freefire;
