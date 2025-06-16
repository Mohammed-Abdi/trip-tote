import "./Item.css";
import { Icon } from "@iconify/react";
import emojis from "../../data/emojis.js";

function Item({ name, quantity, isPacked, setItems, id }) {
  let icon =
    emojis.find((emoji) => emoji.name === name.trim().toLowerCase())?.emoji ||
    "📦";

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
      <span className="item-number"></span>
      <span
        className={`item-info ${isPacked ? "packed" : ""}`}
      >{`${quantity} - ${name} ${icon}`}</span>
      <div className="delete" onClick={deleteItem}>
        <Icon icon="streamline-ultimate:bin-1-bold" className="deleteIcon" />
      </div>
    </div>
  );
}

export default Item;
