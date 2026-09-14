import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";

function Main() {
  return (
    <main className="main">
      <SearchForm />
      <SearchResults />
      <About />
    </main>
  );
}

export default Main;
