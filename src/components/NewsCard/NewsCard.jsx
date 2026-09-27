import ToolTip from "../ToolTip/ToolTip";
// import BookmarkIcon from "../../images/bookmark.svg";
import BookmarkIcon from "../../images/bookmark.svg?react";
import "./NewsCard.css";

function NewsCard() {
  return (
    <a href="/">
      <article className="news-card">
        <div className="news-card__action-container">
          <ToolTip />
          <button
            className="news-card__bookmark-button"
            type="button"
            // onClick={() => alert("Hello")}
          >
            {/* <img
              src={bookmarkIcon}
              className="news-card__bookmark-icon"
              alt=""
            /> */}
            <BookmarkIcon className="news-card__bookmark-icon" />
          </button>
        </div>
        <img
          src="https://placehold.co/400x272"
          alt=""
          className="news-card__image"
        />
        <div className="news-card__content">
          <time datetime="" className="news-card__date">
            September 15th, 2026
          </time>
          <h3 className="news-card__title">
            Article Title a really very very longggggggggg title it's really too
            long like for sure for sure for sure
          </h3>
          <p className="news-card__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            laudantium deserunt, praesentium quidem cum magnam quo reiciendis ea
            quam, numquam quasi sunt alias tempore neque sit fugit nobis labore
            obcaecati?
          </p>
          <p className="news-card__source">Source</p>
        </div>
      </article>
    </a>
  );
}

export default NewsCard;
