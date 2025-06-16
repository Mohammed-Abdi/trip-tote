import "./Item.css";
import { Icon } from "@iconify/react";

function Item({ name, quantity, isPacked }) {
  return (
    <div className="item">
      <input type="checkbox" className="checkbox" />
      <span className="item-number">{quantity}</span>
      <span className={`item-name ${isPacked ? "packed" : ""}`}>{name}</span>
      <div className="delete">
        <Icon icon="streamline-ultimate:bin-1-bold" />
      </div>
    </div>
  );
}

export default Item;
