import React from "react";
import "./healthcare.css";
import nurse from "../../assects/nurse.svg";
import buttonicon from "../../assects/buttonicon.svg";
import whiteteer from "../../assects/whiteteer.svg";
import phoneicon from "../../assects/phoneicon.svg";
const Healthcare = () => {
  return (
    <div className="hero-bg-color">
      {/* ================================================= Container ============================================== */}
      <div className="container">
        <div className="row">
          {/* ============================================== col 1 ================================================== */}
          <div className="col-md-7">
            <h1 className="healthcare-text">
              Best Healthcare For Your
              <span className="Healthy me-3 ">Healthy</span>Life
            </h1>
            <p className="healthy-paragraph mt-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis <br /> praesentium voluptatum deleniti atque corrupti.
            </p>
            <div>
              <div className="d-flex">
                <div className="skilled-div">
                  <span className="skilled">
                    <img src={buttonicon} width={30} alt="" />
                    Skilled Dentist
                  </span>
                </div>
                <div className="technology-div">
                  <span className="letest-technology">
         
                    <img className="" src={buttonicon} width={30} alt="" />
                    Letest Technology
                  </span>
                </div>
              </div>
              <div className="d-flex mt-4">
                <div>
                  <span className="Affortable">
              
                    <img src={buttonicon} width={30} alt="" />
                    Affortable Cost
                  </span>
                </div>
                <div>
                  <span className="hour">
                 
                    <img src={buttonicon} width={30} alt="" />
                    24 hour Service
                  </span>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <button
                    className="p-3 px-4 mt-1 bg-primary mt-5  text-white border rounded-2"
                    type="submit"
                  >
                    Book Now
                    <img className="ms-2" src={whiteteer} alt="" />
                  </button>
                </div>
                <div className="mt-5 pt-1 d-flex">
                  <div>
                    <img className="ms-4" src={phoneicon} alt="phone" />
                  </div>

                  <div className="ms-2 callus mt-1">Call Us </div>

                  <span className="number ms-5 ps-4">
                    <br /> +11 546 524 8547
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* ========================================================= col 2 =================================================== */}
          <div className="col-md-5">
            <div className="mt-4">
              <img className="container img-fluid" src={nurse} width={470} />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

    </div>
  );
};

export default Healthcare;
