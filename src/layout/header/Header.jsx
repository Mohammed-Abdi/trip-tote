import Hamburger from "../../components/hamburger/Hamburger.jsx";
import About from "../../components/about/About.jsx";
import "./Header.css";
import { Icon } from "@iconify/react";

function Header({ menuIsOpen, toggleMenu, aboutIsOpen, toggleAbout }) {
  return (
    <header>
      <Hamburger toggleMenu={toggleMenu} state={menuIsOpen} />
      <a href="#" className="logo" rel="noopener noreferrer">
        <Icon icon="mdi:palm-tree" className="icon" />
        TripTote
      </a>
      <ul className={`lists ${menuIsOpen ? "open" : "close"}`}>
        <li className="nav-link">
          <Icon icon="mdi:palm-tree" className="icon" />
          TripTote
        </li>
        <li className="nav-link">
          <a href="#" className="link">
            <Icon icon="material-symbols:home-rounded" className="icon" />
            Home
          </a>
        </li>
        <li className="nav-link" onClick={toggleAbout}>
          <Icon icon="ix:about-filled" className="icon" />
          About
        </li>
        <li className="nav-link">
          <Icon icon="ic:baseline-message" className="icon" />
          Feedback
        </li>
        <li className="nav-link">
          <a
            href="https://www.linkedin.com/in/mohammed-abdi-tahir/"
            className="link"
          >
            <Icon icon="mdi:contact" className="icon" />
            contact
          </a>
        </li>
      </ul>
      <About aboutIsOpen={aboutIsOpen} toggleAbout={toggleAbout} />
    </header>
  );
}

export default Header;
