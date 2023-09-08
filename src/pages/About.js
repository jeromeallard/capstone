import "./About.css";
import AboutUs1 from "../images/about/aboutus1.jpg";
import AboutUs2 from "../images/about/aboutus2.jpg";

const About = () => {
  return (
    <>
      <section className="container my-3">
        <div className="row justify-center">
          <div className="col-md-6 col-sm-12 align-self-start pd">
            <h2 className="lemon-primary-lemon">Little Lemon</h2>
            <h3 className="emon-primary-dark">Chicago, IL</h3>
            <p>
              Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment.
              The restaurant features a locally-sourced menu with daily specials.
            </p>
            <p>
              We also feature daily specials with meals that are currated and prepared by our head chefs Mario and Adrian. These embody our
              appreciation and love for food and various cuisines. We are always experimenting with new recipies to keep our  customer's
              palletes intriugued so we encourage you to peruse and experiment.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 text-center align-self-center">
            <div className="my-3">
              <img className="about-pic img-fluid" src={AboutUs1} alt="About us 1" />
            </div>
            <div>
              <img className="about-pic img-fluid" src={AboutUs2} alt="About us 2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
