import "./Item.css";

function Item(props) {
  return (
    <div className="item">
      <span className="item-number">{props.quantity}</span>
      <span className="item-name">{props.name}</span>
    </div>
  );
}

export default Item;
