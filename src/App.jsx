import { useState } from "react";
import Header from "./layout/header/Header.jsx";
import MainLayout from "./layout/main/MainLayout.jsx";
function App() {
  const [items, setItems] = useState([]);
  return (
    <>
      <Header />
      <MainLayout items={items} setItems={setItems} />
    </>
  );
}

export default App;
