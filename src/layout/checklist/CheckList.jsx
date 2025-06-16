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
        <div className="total-items">{`${numberOfPackedItems}/${totalNumberOfItems}`}</div>
      ) : (
        ""
      )}

      <div className="checklist-wrapper">
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
