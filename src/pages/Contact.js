import ContactBox from "../components/ContactBox";
import Header from "../components/Header";

const Contact = () => {
  return (
    <main className="contact-page">
      <Header title={"Contact"} project={false} />

      <div className="contact-page-container">
        <div className="contact-page-heading">
          <h4>Contact us</h4>
          <h2>Drop us a line</h2>
          <p>
            We're thrilled to hear from you. Have any questions, feedback, or
            inquiries, please don't hesitate to reach out to us. Our friendly
            team is here to assist you.
          </p>
        </div>
        <div className="contact-form">
          <div className="form-container">
            <form className="form">
              <div className="form-wrapper">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="10"
                  id="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button className="btn">Send Message</button>
            </form>
            <div className="image">
              <img src="/images/girly.jpg" alt="" />
            </div>
          </div>
        </div>
        <ContactBox />
      </div>
    </main>
  );
};

export default Contact;
