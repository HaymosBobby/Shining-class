import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <section className="contacts">
      <div className="contacts-heading">
        <h4>Contact</h4>
        <h2>Get in touch</h2>
        <p>
          Ready to take your mining operations to the next level? We can't wait
          to hear from you and provide the personalized support you need to
          achieve success in the mining industry
        </p>
      </div>
      <div className="contacts-container">
        <div className="contact">
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
        <div className="contact">
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
        <div className="contact">
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
