import Preloader from "../Preloader/Preloader";
import "./SearchResults.css";

function SearchResults() {
  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <Preloader />
      <button className="search-results__show-more-button">Show more</button>
    </section>
  );
}

export default SearchResults;
