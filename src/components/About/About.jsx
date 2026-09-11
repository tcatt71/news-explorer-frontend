import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <img
          src="https://placehold.co/464x464?text=Placeholder%20image"
          alt="author"
          className="about__author-image"
        />
        <div className="about__author-details">
          <h2 className="about__title">About the author</h2>
          <p className="about__paragraph">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </p>
          <p>
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
