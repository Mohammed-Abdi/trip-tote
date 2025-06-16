import "./Item.css";

function Item({ name, quantity }) {
  return (
    <div className="item">
      <span className="item-number">{quantity}</span>
      <span className="item-name">{name}</span>
    </div>
  );
}

export default Item;
