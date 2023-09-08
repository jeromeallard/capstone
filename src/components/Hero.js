import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="container mb-3">
      <div className="info white pd pdr-65p">
        <h1 className="lemon-primary-lemon">Little Lemon</h1>
        <h2>Chicago, IL</h2>
        <p>We are a little but lively bistro centered in the heart of chicago.
          Food is our passion and we'd like to share that with you.
        </p>
        <Link className="txt-dec-none" to="reserve">
          <button className="reserve-btn">Reserve</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
