import CheckList from "../checklist/CheckList.jsx";
import Form from "../form/Form.jsx";
import "./MainLayout.css";

function MainLayout(props) {
  return (
    <div className="wrapper">
      <Form items={props.items} setItems={props.setItems} />
      <CheckList items={props.items} setItems={props.setItems} />
    </div>
  );
}

export default MainLayout;
