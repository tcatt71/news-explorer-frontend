import Header from "../Header/Header";
import SearchFormn from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <SearchFormn />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
