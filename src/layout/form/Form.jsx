import { useState } from "react";
import "./Form.css";
import items from "../../data/items.js";

function Form() {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState("");

  function handleQuantity(e) {
    setQuantity(Number(e.target.value));
  }
  function handleItem(e) {
    setItem(e.target.value);
  }
  function addItem(p) {
    p.preventDefault();
    items.push({ quantity: quantity, item: item });
  }
  return (
    <form action="" className="form">
      <label htmlFor="addItem">What do you want for your trip ?</label>
      <div className="inputs">
        <select
          name="numberOfItem"
          id="numberOfItem"
          className="numberOfItem"
          value={quantity}
          onChange={handleQuantity}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
        </select>

        <input
          type="text"
          placeholder="item..."
          name="addItem"
          id="addItem"
          value={item}
          onChange={handleItem}
        />
      </div>
      <button onClick={addItem}>Add</button>
    </form>
  );
}

export default Form;
