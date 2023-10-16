"use client";

import React from "react";
import fivrrL from "@assets/fivrrL.png";
import fivrrD from "@assets/fivrrD.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <footer>
      <div className="footer-content">
        <div className="profile">
          {/* <img src="your-profile-pic.jpg" alt="Your Name" /> */}
        </div>
        <div className="introduction">
          <p>
            <span className="animated-text">
              I am passionate about turning ideas into reality.
            </span>
            <br />
            <span className="sub-text">
              Let's collaborate and bring your vision to life.
            </span>
          </p>
          <a
            href="https://www.abderrahmane-metiri.me/"
            className="portfolio-link"
          >
            Explore My Portfolio
          </a>
        </div>
      </div>
      <div className="contact-info mt-1">
        <p>Email: metiriabdou@gmail.com</p>
        <p>Connect with me on :</p>
        <div className="">
          <ul className="wrapper">
            <li className="icon linkedin">
              <span className="tooltip">Linkedin</span>
              <span>
                {" "}
                <a
                  href="https://www.linkedin.com/in/abderrahmane-metiri-268ba7245/"
                  className=""
                  style={{ color: "#333333" }}
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="fs-3"
                    size="xl"
                  />
                </a>
              </span>
            </li>

            <li className="icon github">
              <span className="tooltip">Github</span>
              <span>
                <a
                  href="https://github.com/Abdou-MTR"
                  style={{ color: "#333333" }}
                >
                  <FontAwesomeIcon icon={faGithub} className="fs-3" />
                </a>
              </span>
            </li>

            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <span>
                {" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100091928018652&mibextid=ZbWKwL"
                  style={{ color: "#333333" }}
                >
                  <FontAwesomeIcon icon={faFacebook} className="fs-3" />
                </a>
              </span>
            </li>
            <li
              className="icon fiverr"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span className="tooltip">Fiverr</span>
              <span className="d-flex align-items-center justify-content-center">
                <a
                  href="https://www.fiverr.com/abdoumetiri"
                  style={{ color: "inherit", textAlign: "center" }}
                >
                  <Image
                    src={hovered ? fivrrD : fivrrL}
                    alt="fiverr"
                    className="Image-fluid w-50 h-auto"
                  />
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className=" text-center footer-credit">
        <p>©2023 All Rights Reserved to Metiri Abderrahmane</p>
      </div>
    </footer>
  );
};

export default Footer;
