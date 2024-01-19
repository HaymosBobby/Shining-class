import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";

const About = ({ aboutData }) => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="top">
          <div className="about-heading">
            <h4>{aboutData.aboutTitle}</h4>
            <h2>{aboutData.aboutSubTitle}</h2>
          </div>
          <p>{aboutData.aboutDescription}</p>

          {/* <p>
          we prioritize environmental
            stewardship and strive to minimize our ecological footprint. We
            actively engage with local communities, promotiong sustainable
            development and creating opportunities for growth.
            We believe in fostering strong partnerships with our clients,
            working closely with them to understand their unique needs and
            provide tailored mining solutions. Our goal is to exceed
            expectations by delivering projects on time and within budget, while
            maintaining the highest standards of quality.
          </p> */}
        </div>
        <div className="bottom">
          <div className="accordion-container">
            <Accordion allowZeroExpanded={true}>
              {aboutData.accordionData.map((item, index) => (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <p>{item.title}</p>
                      <div className="toggler">
                        <div className="line"></div>
                        <div className="line"></div>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item.description}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="image">
            <img src="../images/tunnel.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
