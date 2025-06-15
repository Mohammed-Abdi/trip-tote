import CheckList from "../checklist/CheckList.jsx";
import Form from "../form/Form.jsx";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="wrapper">
      <Form />
      <CheckList />
    </div>
  );
}

export default MainLayout;
