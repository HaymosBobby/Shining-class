import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <section className="contacts">
      <div className="contacts-heading">
        <h4 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          Contact
        </h4>
        <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          Get in touch
        </h2>
        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          
        </p>
      </div>
      <div className="contacts-container">
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300"
          className="contact"
        >
          <div className="icon">
            <Icon icon="bi:envelope" />
          </div>
          <h3>Email</h3>
          <div className="info">
            <p>
              suppot@shiningclass.com <br />
              info@shiningclass.com
            </p>
          </div>
        </div>
        <div
          className="contact"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <div className="icon">
            {/* <Icon icon="bx:phone-call" /> */}
            <Icon icon="ph:phone-call" />{" "}
          </div>
          <h3>Phone</h3>
          <div className="info">
            <p>
              +234 803 3333 333 <br />
              +234 803 3333 333
            </p>
          </div>
        </div>
        <div
          className="contact"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <div className="icon">
            <Icon icon="ion:location-outline" />
          </div>
          <h3>Address</h3>
          <div className="info">
            <p>
              happiness street melbourne degung city,
              <br />
              Ontario, Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

//
//
