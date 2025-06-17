import "./CheckList.css";
import Item from "../../components/item/Item.jsx";

function CheckList({ items, setItems }) {
  const numberOfPackedItems = items.filter(
    (item) => item.isPacked === true
  ).length;
  const totalNumberOfItems = items.length;
  function deleteAll() {
    setItems([]);
  }
  return (
    <div className="checklist">
      {totalNumberOfItems > 0 ? (
        <div className="total-items">{`${numberOfPackedItems}/${totalNumberOfItems} ${
          numberOfPackedItems / totalNumberOfItems === 1
            ? " - All packed! 😃"
            : " - Keep packing! 🫡"
        }`}</div>
      ) : (
        ""
      )}

      <div className="checklist-wrapper">
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
      {totalNumberOfItems > 0 ? (
        <button className="delete-all" onClick={deleteAll}>
          Delete All
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default CheckList;
