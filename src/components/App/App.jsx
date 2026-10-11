import { useState } from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import DrawerMenu from "../DrawerMenu/DrawerMenu";

import "./App.css";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="page">
      <Header isOpen={isMobileMenuOpen} onMenuClick={handleMenuToggle} />
      <main>
        <SearchForm />
        <About />
      </main>
      <Footer />
      <DrawerMenu isOpen={isMobileMenuOpen} onClose={handleMenuClose} />
    </div>
  );
}

export default App;
