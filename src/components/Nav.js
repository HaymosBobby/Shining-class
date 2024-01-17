import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  window.onscroll = () => {
    window.scrollY > 180 ? setScroll(true) : setScroll(false);
  };

  return (
    <nav className={`${scroll ? "sticky" : ""}`}>
      <div className="nav-container ">
        <div className="bg-logo">
          <Link to="/">
            <h1>SC</h1>
          </Link>
        </div>
        <div className="top">
          <div className="con-soc">
            <div className="contact">
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
            <div className="socials">
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
        <div
          
          className="bottom"
        >
          <div className="md-logo">
            <Link to="/">
              <h1>SC</h1>
            </Link>
          </div>
          <div className="nav-links">
            <ul>
              <Link to="">
                <li>Home</li>
              </Link>
              <Link to="">
                <li>About Us</li>
              </Link>
              <Link to="">
                <li>Our Team</li>
              </Link>
              <Link to="">
                <li>Contact</li>
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
                  <Icon icon="ri:facebook-fill" />
                </li>
              </Link>
              <Link to="">
                <li>
                  <Icon icon={"bi:instagram"} />
                </li>
              </Link>
              <Link to="">
                <li>
                  <Icon icon="akar-icons:linkedin-fill" />
                </li>
              </Link>
              <Link to="">
                <li>
                  <Icon icon="pajamas:twitter" />
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
