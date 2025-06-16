import "./CheckList.css";
import Item from "../../components/item/Item.jsx";

function CheckList({ items, setItems }) {
  const numberOfPackedItems = items.filter(
    (item) => item.isPacked === true
  ).length;
  const totalNumberOfItems = items.length;
  return (
    <div className="checklist">
      <div className="total-items">{`${numberOfPackedItems}/${totalNumberOfItems}`}</div>

      {console.log(`${numberOfPackedItems}/${items.length}`)}
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
