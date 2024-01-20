import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const About = ({ aboutData }) => {
  const { aboutTitle, aboutSubTitle, aboutDescription, accordionData } =
    aboutData;
  return (
    <section className="about">
      <div className="about-container">
        <div className="top">
          <div className="about-heading">
            <h4>{aboutTitle}</h4>
            <h2>{aboutSubTitle}</h2>
          </div>
          <p>{aboutDescription}</p>
        </div>
        <div className="bottom">
          <div className="accordion-container">
            <Accordion allowZeroExpanded={true}>
              {accordionData.map((item, index) => (
                <AccordionItem key={index}>
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
