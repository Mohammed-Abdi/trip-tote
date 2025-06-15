import "./Item.css";

function Item(props) {
  return (
    <div className="item">
      <button className="check">✅</button>
      <span className="item-name">{props.quantity}</span>
      <span className="item-name">{props.item}</span>
      <button className="delete">❌</button>
    </div>
  );
}

export default Item;
