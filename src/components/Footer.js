import FooterImg from "../images/logos/littleLemonfooterLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="pd lemon-primary-dark white row">
        <div className="row">
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>SITEMAP</h4>
            <Link className="block" to="/">
              Home
            </Link>
            <Link className="block" to="/reserve">
              Reserve
            </Link>
            <Link className="block" to="/menu">
              Menu
            </Link>
            <Link className="block" to="/about">
              About Us
            </Link>
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>CONTACT US</h4>
            <address>
              Corner of State and Madison
              <br />
              Chicago, IL
            </address>
            <a className="footer-block" href="tel:+1112223334">
            Tel: +1112223334
            </a>
            <a className="footer-block" href="mailto: help@littlelemon.com">
              Email: help@littlelemon.com
              <br/>
            </a>
          </div>
        </div>
        <div className="col-full foot-center">
          <p>Little Lemon Restaurant 2023. &copy;</p>
        </div>

      </footer>
    </>
  );
};

export default Footer;
