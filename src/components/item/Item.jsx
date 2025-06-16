import "./Item.css";
import { Icon } from "@iconify/react";

function Item({ name, quantity, isPacked, setItems, id }) {
  function packItUp() {
    setItems((prevItems) =>
      prevItems.map((item) => {
        return id === item.id ? { ...item, isPacked: !item.isPacked } : item;
      })
    );
  }

  function deleteItem() {
    setItems((prevItems) =>
      prevItems.filter((item) => {
        return id !== item.id;
      })
    );
  }

  return (
    <div className="item">
      <input type="checkbox" className="checkbox" onClick={packItUp} />
      <span className="item-number">{quantity}</span>
      <span className={`item-name ${isPacked ? "packed" : ""}`}>{name}</span>
      <div className="delete" onClick={deleteItem}>
        <Icon icon="streamline-ultimate:bin-1-bold" className="deleteIcon" />
      </div>
    </div>
  );
}

export default Item;
