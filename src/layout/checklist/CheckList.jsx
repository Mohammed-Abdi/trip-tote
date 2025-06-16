import "./CheckList.css";
import Item from "../../components/item/Item.jsx";

function CheckList({ items, setItems }) {
  return (
    <div className="checklist">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            name={item.item}
            quantity={item.quantity}
            isPacked={item.isPacked}
            setItems={setItems}
            id={item.id}
          />
        );
      })}
    </div>
  );
}

export default CheckList;
