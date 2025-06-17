import Hamburger from "../../components/hamburger/Hamburger.jsx";
import "./Header.css";
import { Icon } from "@iconify/react";

function Header({ menuIsOpen, setMenuIsOpen }) {
  function toggleMenu() {
    setMenuIsOpen((open) => !open);
  }

  return (
    <header>
      <Hamburger action={toggleMenu} state={menuIsOpen} />
      <a href="#" className="logo" rel="noopener noreferrer">
        <Icon icon="mdi:palm-tree" className="icon" />
        TripTote
      </a>
      <ul className={`lists ${menuIsOpen ? "open" : "close"}`}>
        <li>
          <Icon icon="mdi:palm-tree" className="icon" />
          TripTote
        </li>
        <li>
          <a href="#" className="link">
            <Icon icon="material-symbols:home-rounded" className="icon" />
            Home
          </a>
        </li>
        <li>
          <Icon icon="ix:about-filled" className="icon" />
          About
        </li>
        <li>
          <Icon icon="ic:baseline-message" className="icon" />
          Feedback
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mohammed-abdi-tahir/"
            className="link"
          >
            <Icon icon="mdi:contact" className="icon" />
            contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
