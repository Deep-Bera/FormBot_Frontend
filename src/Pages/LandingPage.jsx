// import React from "react";
import { Link } from "react-router-dom";
import "../Styles/LandingPage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const LandingPage = () => {
  return (
    <div className="mainDiv">
      <header>
        <div className="header">
          <div>
            <img src="/images/FormBot.png" alt="FormBot.png" />
          </div>
          <div className="RightHeader">
            <Link to="/signin">
              <button className="signInButton">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="createFormBotButton">Create a FormBot</button>
            </Link>
          </div>
        </div>
      </header>

      <div className="MiddleImage">
        <img
          src="/images/LandingPageBgImage.png"
          alt="Landing Page Background"
        />
      </div>

      <footer className="footer">
        <div className="mainFooter">
          <div className="footer-column">
            <img src="/images/FormBot.png" alt="FormBot.png" />
            <p>Made with ❤️ by @Deep Bera</p>
          </div>
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li>
                <a href="#">
                  Status&nbsp;
                  <i
                    className="fa-solid fa-arrow-up-right-from-square"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  Documentation&nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  Roadmap&nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  Pricing&nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li>
                <a href="#">
                  Discord&nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  GitHub repository&nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  Twitter&nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  LinkedIn&nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  OSS Friends&nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">
                  About
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  Contact&nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  Terms of Service&nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  Privacy Policy&nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;
