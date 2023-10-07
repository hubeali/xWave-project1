import React from "react";
import "./root-layout.css";
import logo from "../../assects/logo.png";
import signup from "../../assects/signup.svg";
const RootLayout = () => {
  return (
    <div className="Nav-background-color">
      <div>
        {/* ======================================= NavBar ================================================================ */}
        <nav className="navbar navbar-expand-lg navigation ">
          <div className="container-fluid container">
            <a className="navbar-brand" href="#">
              {/* =================================================== logo =========================================== */}
              <img src={logo} alt="logo" width={120} />
            </a>
            {/* ========================================================= Toggle Button ======================================== */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mt-1 mb-lg-0 ms-4 ">
                {/* ==================================== Home ====================================== */}
                <li className="dropdown">
                  <a
                    className="nav-link me-3 dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <span className="nav-items ms-1">Home</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                {/* ============================================ User account =========================================  */}
                <li className="dropdown">
                  <a
                    className="nav-link me-3 dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <span className="nav-items">User Account</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Auth Page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Account Overview
                      </a>
                    </li>
                    <li> </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Account Setting
                      </a>
                    </li>
                  </ul>
                </li>
                {/* ================================================ Pages ========================================== */}
                <li className="dropdown">
                  <a
                    className="nav-link me-3 dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <span className="nav-items">Pages</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li> </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                {/* ==================================================== Documentation =========================================== */}
                <li className="dropdown mt-2 ">
                  <span className="Documentation">Documentation</span>
                </li>
              </ul>
              <div className="signin-group mx-auto ps-5 me-5 ">
                <form>
                  <span className="border-0 signin">
                    <img
                      className="me-2 mb-1"
                      src={signup}
                      alt="signup"
                      width={12}
                    />
                    <span className="signin-text">Sign In</span>
                  </span>
                  <button
                    className="p-3 px-4 mt-1 bg-primary book-appointment text-white border rounded-2"
                    type="submit"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default RootLayout;
