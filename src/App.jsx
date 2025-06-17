import Header from "./layout/header/Header.jsx";
import MainLayout from "./layout/main/MainLayout.jsx";
import { useState } from "react";
function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [aboutIsOpen, setAboutIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen((open) => !open);
  }

  function toggleAbout() {
    setAboutIsOpen((open) => !open);
  }

  function closeMenu() {
    if (menuIsOpen === true) setMenuIsOpen((open) => !open);
  }

  return (
    <>
      <Header
        menuIsOpen={menuIsOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        aboutIsOpen={aboutIsOpen}
        toggleAbout={toggleAbout}
      />
      <MainLayout closeMenu={closeMenu} />
    </>
  );
}

export default App;
