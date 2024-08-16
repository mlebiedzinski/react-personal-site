import { Link } from "react-scroll";
import React from "react";

function Footer() {

  const my_email = "lebiedzinski.m@northeastern.edu";
  const my_linkedIn = "https://www.linkedin.com/in/maddie-lebiedzinski-826436229/";
  const my_github = "https://github.com/mlebiedzinski";

  return (
    <footer className="footer--container">
        <div className="footer-rects">
        <a href="./img/Maddie_Lebiedzinski_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <div className="img-container">
            <img src="./img/rect1.svg" alt="Rect1 Image"/>
            <h4 className="footer-link-text">View my resume</h4>
          </div>
          </a>
          <a href={my_github} target="_blank" rel="noopener noreferrer">
          <div className="img-container">
            <img src="./img/rect2.svg" alt="Rect1 Image" />
            <h4 className="footer-link-text">Check out my code</h4>
          </div>
          </a>
          <a href={my_linkedIn} target="_blank" rel="noopener noreferrer">
          <div className="img-container">
            <img src="./img/rect3.svg" alt="Rect1 Image" />
            <h4 className="footer-link-text">Visit me on LinkedIn</h4>
          </div>
          </a>
          <div className="img-container">
          <a href={`mailto:${my_email}`} target="_blank" rel="noopener noreferrer">
            <img src="./img/rect4.svg" alt="Rect1 Image" />
            <h4 className="footer-link-text">Send me an email</h4>
          </a>
          </div>
          <div className="img-container">
          <Link to="heroSection">
            <img src="./img/rect5.svg" alt="Rect1 Image" />
            <h4 className="footer-link-text">Website built by me ^</h4>
          </Link>
          </div>
        </div>
          </footer>
  );
}

export default Footer;