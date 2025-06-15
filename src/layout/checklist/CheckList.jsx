import "./CheckList.css";
import items from "../../data/items.js";
import Item from "../../components/item/Item.jsx";

function CheckList() {
  return (
    <div className="checklist">
      {items.map((item) => {
        return <Item name={item.name} quantity={item.item} />;
      })}
    </div>
  );
}

export default CheckList;
