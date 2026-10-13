import { useState } from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

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

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSubmit = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        isModalOpen={activeModal !== ""}
        onMenuClick={handleMenuToggle}
        onOpenModal={handleOpenModal}
      />
      <main>
        <SearchForm />
        <About />
      </main>
      <Footer />
      <DrawerMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMenuClose}
        onOpenModal={handleOpenModal}
      />
      <LoginModal
        isOpen={activeModal === "login"}
        activeModal={activeModal}
        onOpenModal={handleOpenModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        activeModal={activeModal}
        onOpenModal={handleOpenModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
