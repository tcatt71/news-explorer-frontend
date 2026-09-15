import nothingFoundIcon from "../../images/not-found.svg";
import "./NothingFound.css";

function NothingFound() {
  return (
    <div className="nothing-found">
      <img src={nothingFoundIcon} alt="" className="nothing-found__icon" />
      <h2 className="nothing-found__title">Nothing found</h2>
      <p className="nothing-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NothingFound;
