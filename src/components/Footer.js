import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Footer = () => {
  const year = new Date().getFullYear();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <footer>
      <div className="footer-container">
        <div className="top">
          <div className="cont">
            <div className="logo-image">
              <img src="/images/sc-long-0.png" alt="Shining Class" />
            </div>
            <p>
              Together, we can unearth success and drive sustainable growth.
              Contact us today to discover how we can support your mining
              endeavors.
            </p>
            <ul>
              <Link to="">
                <li>
                  <Icon icon={"ri:facebook-fill"} />
                </li>
              </Link>
              <Link to="">
                <li>
                  <Icon icon={"bi:instagram"} />
                </li>
              </Link>
              <Link to="">
                <li>
                  <Icon icon={"akar-icons:linkedin-fill"} />
                </li>
              </Link>
              <Link to="">
                <li>
                  <Icon icon={"pajamas:twitter"} />
                </li>
              </Link>
            </ul>
          </div>
          <div className="cont">
            <h2>Quick links</h2>
            <ul>
              <Link>
                <li>Home</li>
              </Link>
              <Link>
                <li>About</li>
              </Link>
              <Link>
                <li>Services</li>
              </Link>
              <Link>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className="cont">
            <h2>Our newsletter</h2>
            <form className="form">
              <div className="form-group">
                <input type="email" required placeholder="Your email adress" />
                <button type="submit">
                  <Icon icon="bi:send" />
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="announcement">
        <Slider {...settings}>
          <div>
            <div className="slide">
              <Icon icon="ph:phone-call" />
              <span>+234 803 3333 333</span>
            </div>
          </div>
          <div>
            <div className="slide">
              <Icon icon="ph:phone-call" />
              <span>+234 803 3333 333</span>
            </div>
          </div>
          <div>
            <div className="slide">
              <Icon icon="ph:phone-call" />
              <span>+234 803 3333 333</span>
            </div>
          </div>
          <div>
            <div className="slide">
              <Icon icon="ph:phone-call" />
              <span>+234 803 3333 333</span>
            </div>
          </div>
          <div>
            <div className="slide">
              <Icon icon="ph:phone-call" />
              <span>+234 803 3333 333</span>
            </div>
          </div>
          <div>
            <div className="slide">
              <Icon icon="ph:phone-call" />
              <span>+234 803 3333 333</span>
            </div>
          </div>
        </Slider>
      </div>
      <div className="bottom">
        <p>
          &copy;
          {`${year} Shining Class & Company Global Investment Limited |
            All right reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
