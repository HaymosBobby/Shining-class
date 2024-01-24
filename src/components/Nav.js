import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const path = useLocation().pathname;

  window.onscroll = () => {
    window.scrollY > 180 ? setScroll(true) : setScroll(false);
  };

  return (
    <nav
      className={`${scroll ? "sticky" : ""} ${path !== "/" ? "bgd-dark" : ""}`}
    >
      <div className="nav-container ">
        <div className="bg-logo">
          <Link to="/">
            <img
              src={path !== "/" ? "/images/sc-long-0.png" : "/images/sc-long.png"}
              alt="Shining Class"
            />
          </Link>
          {/* <Link to="/">
            <img src="/images/sc-icon-c.png" alt="Shining Class" />
          </Link> */}
        </div>
        <div className="top">
          <div className="con-soc">
            <div className="nav-contact">
              <ul>
                <Link to="">
                  <li>
                    <Icon icon="bi:telephone-fill" hFlip={true} /> +234 333 3333
                    333
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <Icon icon="bi:phone-fill" hFlip={true} /> +234 803 3333 333
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <Icon icon="bi:envelope" hFlip={true} />{" "}
                    info@shiningclass.com
                  </li>
                </Link>
              </ul>
            </div>
            <div className="nav-socials">
              <ul>
                <Link to="">
                  <li>
                    <Icon icon={"bi:facebook"} />
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <Icon icon={"bi:instagram"} />
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <Icon icon={"bi:linkedin"} />
                  </li>
                </Link>
                <Link to="">
                  <li>
                    <Icon icon={"bi:twitter-x"} />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="md-logo">
            <Link to="/">
              <img
                src={scroll ? "/images/sc-long-0.png" : "/images/sc-long.png"}
                alt=""
              />
            </Link>
          </div>
          <div className="nav-links">
            <ul>
              <Link to="">
                <li className={`${path === "/" ? "current" : ""}`}>Home</li>
              </Link>
              <Link to="/about">
                <li className={`${path === "/about" ? "current" : ""}`}>
                  About Us
                </li>
              </Link>
              <Link to="/our-team">
                <li className={`${path === "/our-team" ? "current" : ""}`}>
                  Our Team
                </li>
              </Link>
              <Link to="/contact">
                <li className={`${path === "/contact" ? "current" : ""}`}>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className={`mobile-toggler ${
              mobileNavOpen ? "mobile-nav-active" : ""
            }`}
          >
            <div className="toggle-container">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mobile-navigations ${
          mobileNavOpen ? "mobile-nav-active" : ""
        }`}
      >
        <div className="mobile-navigation-container">
          <div onClick={() => setMobileNavOpen(false)} className="cancel">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="mobile-nav-links">
            <ul>
              <Link>
                <li>Home</li>
              </Link>
              <Link>
                <li>About Us</li>
              </Link>
              <Link>
                <li>Our Team</li>
              </Link>
              <Link>
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          <div className="mobile-socials">
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
        </div>
      </div>
    </nav>
    // <nav>
    //   <div className="nav-container">
    //     <div className="left">
    //       <h1>
    //         <Link to="/">SC</Link>
    //       </h1>
    //     </div>

    //     <div className="right">
    //       <div className="top">
    //         <div className="con-soc">
    //           <div className="contact">
    //             <ul>
    //               <li>
    //                 <Link to="">
    //                   <Icon icon="bi:telephone-fill" hFlip={true} /> +234 333
    //                   3333 333
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to="">
    //                   <Icon icon="bi:phone-fill" hFlip={true} /> +234 803 3333
    //                   333
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to="">
    //                   <Icon icon="bi:envelope" hFlip={true} />{" "}
    //                   info@shiningclass.com
    //                 </Link>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="socials">
    //             <ul>
    //               <li>
    //                 <Link to="">
    //                   <Icon icon={"bi:facebook"} />
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to="">
    //                   <Icon icon={"bi:instagram"} />
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to="">
    //                   <Icon icon={"bi:linkedin"} />
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link to="">
    //                   <Icon icon={"bi:twitter-x"} />
    //                 </Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="bottom">
    //         <div className="md-logo">
    //           <h1>
    //             <Link to="/">SC</Link>
    //           </h1>
    //         </div>
    //         <div className="nav-links">
    //           <ul>
    //             <li>
    //               <Link to="">Home</Link>
    //             </li>
    //             <li>
    //               <Link to="">About Us</Link>
    //             </li>
    //             <li>
    //               <Link to="">Our Team</Link>
    //             </li>
    //             <li>
    //               <Link to="">Contact</Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Nav;
