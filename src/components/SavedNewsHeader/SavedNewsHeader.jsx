import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <section className="saved-news-header section-padding">
      <h2 className="saved-news-header__title">Saved articles</h2>
      <p className="saved-news-header__text">
        Elise, you have 5 saved articles
      </p>
      <p>
        By keywords:{" "}
        <span className="saved-news-header__keywords">
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
