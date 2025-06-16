import "./Item.css";
import { Icon } from "@iconify/react";

function Item({ name, quantity, isPacked, setItems, id }) {
  let icon;

  if (name.trim().toLowerCase() === "sunglasses") {
    icon = "🕶️";
  } else if (name.trim().toLowerCase() === "passport") {
    icon = "🛂";
  } else if (
    name.trim().toLowerCase() === "luggage" ||
    name.trim().toLowerCase() === "suitcase" ||
    name.trim().toLowerCase() === "bag"
  ) {
    icon = "🧳";
  } else if (
    name.trim().toLowerCase() === "shirt" ||
    name.trim().toLowerCase() === "t-shirt"
  ) {
    icon = "👕";
  } else if (name.trim().toLowerCase() === "toothbrush") {
    icon = "🪥";
  } else if (name.trim().toLowerCase() === "toothpaste") {
    icon = "🦷";
  } else if (name.trim().toLowerCase() === "camera") {
    icon = "📷";
  } else if (name.trim().toLowerCase() === "headphones") {
    icon = "🎧";
  } else if (
    name.trim().toLowerCase() === "phone charger" ||
    name.trim().toLowerCase() === "charger"
  ) {
    icon = "🔌";
  } else if (name.trim().toLowerCase() === "wallet") {
    icon = "👛";
  } else if (name.trim().toLowerCase() === "tickets") {
    icon = "🎟️";
  } else if (
    name.trim().toLowerCase() === "hat" ||
    name.trim().toLowerCase() === "cap"
  ) {
    icon = "👒";
  } else if (name.trim().toLowerCase() === "snacks") {
    icon = "🍫";
  } else if (
    name.trim().toLowerCase() === "water bottle" ||
    name.trim().toLowerCase() === "bottle"
  ) {
    icon = "🚰";
  } else if (
    name.trim().toLowerCase() === "swimsuit" ||
    name.trim().toLowerCase() === "bikini" ||
    name.trim().toLowerCase() === "trunks"
  ) {
    icon = "🩱";
  } else if (name.trim().toLowerCase() === "map") {
    icon = "🗺️";
  } else if (name.trim().toLowerCase() === "book") {
    icon = "📖";
  } else if (
    name.trim().toLowerCase() === "shoes" ||
    name.trim().toLowerCase() === "sneakers"
  ) {
    icon = "👟";
  } else if (name.trim().toLowerCase() === "flip flops") {
    icon = "🩴";
  } else if (name.trim().toLowerCase() === "laptop") {
    icon = "💻";
  } else if (
    name.trim().toLowerCase() === "notebook" ||
    name.trim().toLowerCase() === "journal"
  ) {
    icon = "📓";
  } else if (
    name.trim().toLowerCase() === "pen" ||
    name.trim().toLowerCase() === "pencil"
  ) {
    icon = "🖊️";
  } else if (name.trim().toLowerCase() === "umbrella") {
    icon = "☂️";
  } else if (
    name.trim().toLowerCase() === "medicine" ||
    name.trim().toLowerCase() === "first aid"
  ) {
    icon = "💊";
  } else if (name.trim().toLowerCase() === "sunscreen") {
    icon = "🌞";
  } else if (name.trim().toLowerCase() === "tent") {
    icon = "⛺";
  } else if (name.trim().toLowerCase() === "sleeping bag") {
    icon = "🛌";
  } else if (name.trim().toLowerCase() === "blanket") {
    icon = "🧣";
  } else if (
    name.trim().toLowerCase() === "flashlight" ||
    name.trim().toLowerCase() === "torch"
  ) {
    icon = "🔦";
  } else if (name.trim().toLowerCase() === "deodorant") {
    icon = "🧼";
  } else if (name.trim().toLowerCase() === "towel") {
    icon = "🧻";
  } else if (name.trim().toLowerCase() === "soap") {
    icon = "🧼";
  } else if (
    name.trim().toLowerCase() === "comb" ||
    name.trim().toLowerCase() === "brush"
  ) {
    icon = "💇";
  } else if (name.trim().toLowerCase() === "shampoo") {
    icon = "🧴";
  } else if (name.trim().toLowerCase() === "earplugs") {
    icon = "🔇";
  } else if (
    name.trim().toLowerCase() === "mask" ||
    name.trim().toLowerCase() === "face mask"
  ) {
    icon = "😷";
  } else if (name.trim().toLowerCase() === "watch") {
    icon = "⌚";
  } else if (name.trim().toLowerCase() === "travel pillow") {
    icon = "🛏️";
  } else if (name.trim().toLowerCase() === "keys") {
    icon = "🔑";
  } else if (
    name.trim().toLowerCase() === "money" ||
    name.trim().toLowerCase() === "cash"
  ) {
    icon = "💵";
  } else if (name.trim().toLowerCase() === "credit card") {
    icon = "💳";
  } else if (
    name.trim().toLowerCase() === "food" ||
    name.trim().toLowerCase() === "meal"
  ) {
    icon = "🍱";
  } else if (name.trim().toLowerCase() === "coffee") {
    icon = "☕";
  } else if (name.trim().toLowerCase() === "tea") {
    icon = "🍵";
  } else if (
    name.trim().toLowerCase() === "suit" ||
    name.trim().toLowerCase() === "tie"
  ) {
    icon = "👔";
  } else if (name.trim().toLowerCase() === "dress") {
    icon = "👗";
  } else if (name.trim().toLowerCase() === "jacket") {
    icon = "🧥";
  } else if (name.trim().toLowerCase() === "gloves") {
    icon = "🧤";
  } else if (name.trim().toLowerCase() === "scarf") {
    icon = "🧣";
  } else {
    icon = "📦";
  }

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
