import "./CheckList.css";
import Item from "../../components/item/Item.jsx";

function CheckList({ items }) {
  return (
    <div className="checklist">
      {items.map((item, index) => {
        return <Item key={index} name={item.item} quantity={item.quantity} />;
      })}
    </div>
  );
}

export default CheckList;
