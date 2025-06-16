import "./CheckList.css";
import Item from "../../components/item/Item.jsx";

function CheckList({ items, setItems }) {
  return (
    <div className="checklist">
      {items.map((item, index) => {
        return (
          <Item
            key={index}
            name={item.item}
            quantity={item.quantity}
            isPacked={item.isPacked}
            setItems={setItems}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default CheckList;
