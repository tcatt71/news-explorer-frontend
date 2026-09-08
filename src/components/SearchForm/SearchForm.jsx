import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__content">
        <hgroup>
          <h1 className="search-form__title">What's going on in the world?</h1>
          <p className="search-form__subtext">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
        </hgroup>
        <form className="search-form__form">
          <input
            type="text"
            className="search-form__input"
            placeholder="Enter topic"
            required
          ></input>
          <button type="submit" className="search-form__submit-button">
            Search
          </button>
        </form>
      </div>
      <div className="search-form__overlay"></div>
    </section>
  );
}

export default SearchForm;
