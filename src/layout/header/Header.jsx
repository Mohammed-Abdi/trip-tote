import { useState } from "react";
import Hamburger from "../../components/hamburger/Hamburger.jsx";
import "./Header.css";
import { Icon } from "@iconify/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen((open) => !open);
  }

  return (
    <header>
      <Hamburger action={toggleMenu} state={isOpen} />
      <a href="#" className="logo" rel="noopener noreferrer">
        <Icon icon="mdi:palm-tree" className="icon" />
        TripTote
      </a>
      <ul className={`lists ${isOpen ? "open" : "close"}`}>
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
          <a href="#" className="link">
            <Icon icon="ix:about-filled" className="icon" />
            About
          </a>
        </li>
        <li>
          <a href="#" className="link">
            <Icon icon="ic:baseline-message" className="icon" />
            Feedback
          </a>
        </li>
        <li>
          <a href="#" className="link">
            <Icon icon="mdi:contact" className="icon" />
            contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
