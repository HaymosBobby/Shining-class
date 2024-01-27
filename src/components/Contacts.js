import ContactBox from "./ContactBox";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts-heading">
        <h4 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          Contact
        </h4>
        <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          Get in touch
        </h2>
        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          Ready to take your mining operations to the next level? We can't wait
          to hear from you and provide the personalized support you need to
          achieve success in the mining industry!
        </p>
      </div>
      <ContactBox />
    </section>
  );
};

export default Contacts;

//
//
