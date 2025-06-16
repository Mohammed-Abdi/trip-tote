import CheckList from "../checklist/CheckList.jsx";
import Form from "../form/Form.jsx";
import "./MainLayout.css";
import { useState } from "react";

function MainLayout() {
  const [items, setItems] = useState([]);

  return (
    <div className="wrapper">
      <Form setItems={setItems} />
      <CheckList items={items} setItems={setItems} />
    </div>
  );
}

export default MainLayout;
