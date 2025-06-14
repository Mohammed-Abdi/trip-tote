import "./Hamburger.css";

function Hamburger(props) {
  return (
    <div
      className={`hamburger ${props.state ? "active" : ""}`}
      onClick={props.action}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

export default Hamburger;
