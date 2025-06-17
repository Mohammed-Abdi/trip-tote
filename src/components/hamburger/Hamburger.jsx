import "./Hamburger.css";

function Hamburger({ state, toggleMenu }) {
  return (
    <div className={`hamburger ${state ? "active" : ""}`} onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

export default Hamburger;
