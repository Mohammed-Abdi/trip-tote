import CheckList from "../checklist/CheckList.jsx";
import Form from "../form/Form.jsx";
import "./MainLayout.css";
import { useState } from "react";

function MainLayout({ closeMenu }) {
  const [items, setItems] = useState([]);

  return (
    <div className="wrapper" onClick={closeMenu}>
      <Form setItems={setItems} />
      <CheckList items={items} setItems={setItems} />
    </div>
  );
}

export default MainLayout;
