import Header from "./layout/header/Header.jsx";
import MainLayout from "./layout/main/MainLayout.jsx";
import { useState } from "react";
function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <MainLayout />
    </>
  );
}

export default App;
