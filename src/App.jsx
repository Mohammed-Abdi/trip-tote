import Header from "./layout/header/Header.jsx";
import MainLayout from "./layout/main/MainLayout.jsx";
import { useState } from "react";
function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  function closeMenu() {
    if (menuIsOpen !== false) setMenuIsOpen((open) => !open);
  }

  return (
    <>
      <Header
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
        closeMenu={closeMenu}
      />
      <MainLayout closeMenu={closeMenu} />
    </>
  );
}

export default App;
