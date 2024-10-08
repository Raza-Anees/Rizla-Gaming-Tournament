// Assuming the CSS is in a separate file
import tekken from "../assets/tekken.jpg";
import apex from "../assets/apexx.png";
import cod from "../assets/cod.jpg";
import fc25 from "../assets/fc25.png";
import valorant from "../assets/valorant.png";
import pubg from "../assets/pubg.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src={pubg} alt="PUBG" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src={apex} alt="Apex Legends" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src={tekken} alt="Tekken" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src={fc25} alt="FC 25" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src={cod} alt="Call of Duty" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src={valorant} alt="Valorant" />
        </div>
      </div>
      {/* <div className=" text-green-950"> WELCOME</div> */}
      <div className="content">
        {/* <h1 data-content="WELCOME">WELCOME</h1> */}

        <div className="model"></div>
      </div>
    </div>
  );
};

export default Banner;
