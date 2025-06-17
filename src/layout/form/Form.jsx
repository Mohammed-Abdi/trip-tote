import { useState } from "react";
import "./Form.css";
import { nanoid } from "nanoid";

function Form({ setItems }) {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState("");

  function resetInput() {
    setItem("");
    setQuantity(1);
  }

  function handleSubmit(p) {
    p.preventDefault();
    if (!item) return;
    const newItem = {
      id: nanoid(),
      item: item,
      quantity: quantity,
      isPacked: false,
    };
    setItems((items) => [...items, newItem]);
    resetInput();
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      name="item-form"
      id="item-form"
    >
      <label htmlFor="addItem">What do you want for your trip?</label>
      <div className="inputs">
        <select
          name="numberOfItem"
          id="numberOfItem"
          className="numberOfItem"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          autoComplete="off"
        >
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="item..."
          name="addItem"
          id="addItem"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          autoComplete="off"
        />
      </div>

      <button type="submit" id="submit-button" name="submit">
        Add Item
      </button>
    </form>
  );
}

export default Form;
