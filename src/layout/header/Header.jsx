import "./Header.css";
import { Icon } from "@iconify/react";

function Header() {
  return (
    <header>
      <a href="#" className="logo" rel="noopener noreferrer">
        <Icon icon="mdi:palm-tree" className="icon" />
        TripTote
      </a>
      <ul>
        <li>
          <a href="#" className="link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Feedback
          </a>
        </li>
        <li>
          <a href="#" className="link">
            contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
