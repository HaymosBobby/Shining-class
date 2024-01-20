import { Icon } from "@iconify/react";

const Services = ({ servicesData }) => {
  const { serviceTitle, serviceSubTitle, serviceData } = servicesData;
  return (
    <section className="services">
      <div className="services-heading">
        <h4>{serviceTitle}</h4>
        <h2>{serviceSubTitle}</h2>
      </div>
      <div className="services-container">
        {serviceData.map((item, inder) => (
          <div className="service">
            <div className="icon">
              <Icon icon={item.icon} />
            </div>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
