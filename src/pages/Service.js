import { Icon } from "@iconify/react";
import Header from "../components/Header";
import CountUp from "react-countup";
import { useMemo } from "react";

const Services = () => {
  const enableScrollSpy = useMemo(() => true, []);
  const scrollSpyOnce = useMemo(() => true, []);
  return (
    <main className="services-page">
      <Header title={"Services"} />

      <div className="services-page-container">
        <div className="services-page-heading">
          <h4>What we offer</h4>
          <h2>Our main services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quod laudantium voluptates quas. Maiores, corrupti.
          </p>
        </div>

        <div className="main-services">
          <div className="service-box">
            <div className="image">
              <img src="/images/explosion.jpg" alt="" />
            </div>
            <div className="description">
              <h4>Extraction</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                velit, quisquam exercitationem quas sint inventore ratione
                laborum id fuga nihil, maiores nisi praesentium, enim itaque.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="image">
              <img src="/images/explosion.jpg" alt="" />
            </div>
            <div className="description">
              <h4>Extraction</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                velit, quisquam exercitationem quas sint inventore ratione
                laborum id fuga nihil, maiores nisi praesentium, enim itaque.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="image">
              <img src="/images/explosion.jpg" alt="" />
            </div>
            <div className="description">
              <h4>Extraction</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                velit, quisquam exercitationem quas sint inventore ratione
                laborum id fuga nihil, maiores nisi praesentium, enim itaque.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="image">
              <img src="/images/explosion.jpg" alt="" />
            </div>
            <div className="description">
              <h4>Extraction</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                velit, quisquam exercitationem quas sint inventore ratione
                laborum id fuga nihil, maiores nisi praesentium, enim itaque.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="choose">
        <div className="choose-container">
          <div className="choose-box">
            <div className="icon">
              <Icon icon="material-symbols-light:punch-clock-outline-rounded" />
            </div>
            <h4>Punctuality</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              obcaecati quaerat sed, harum illo laudantium nemo corporis
              incidunt, vitae ipsa recusandae animi eum adipisci molestiae
              dolores maiores laborum, quae aut!
            </p>
          </div>
          <div className="choose-box">
            <div className="icon">
              <Icon icon="material-symbols-light:punch-clock-outline-rounded" />
            </div>
            <h4>Punctuality</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              obcaecati quaerat sed, harum illo laudantium nemo corporis
              incidunt, vitae ipsa recusandae animi eum adipisci molestiae
              dolores maiores laborum, quae aut!
            </p>
          </div>
          <div className="choose-box">
            <div className="icon">
              <Icon icon="material-symbols-light:punch-clock-outline-rounded" />
            </div>
            <h4>Punctuality</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              obcaecati quaerat sed, harum illo laudantium nemo corporis
              incidunt, vitae ipsa recusandae animi.
            </p>
          </div>
          <div className="choose-box-header">
            <div className="choose-heading">
              <h4>Why we are</h4>
              <h2>Different from others</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                similique, optio maiores vero pariatur adipisci placeat culpa,
                omnis, molestiae eligendi dolorum et delectus beatae doloremque!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-container">
        <div className="counter-wrapper">
          <div className="counter-box">
            <div className="icon">
              <Icon icon="healthicons:accident-and-emergency-outline" />
            </div>
            <div className="counter">
              <CountUp
                end={365}
                enableScrollSpy={enableScrollSpy}
                scrollSpyOnce={scrollSpyOnce}
              />
              +
            </div>
            <h3>accident-free days</h3>
          </div>
          <div className="counter-box">
            <div className="icon">
              <Icon icon="healthicons:accident-and-emergency-outline" />
            </div>
            <div className="counter">
              <CountUp
                end={750}
                enableScrollSpy={enableScrollSpy}
                scrollSpyOnce={scrollSpyOnce}
              />
            </div>
            <h3>accident-free days</h3>
          </div>
          <div className="counter-box">
            <div className="icon">
              <Icon icon="healthicons:accident-and-emergency-outline" />
            </div>
            <div className="counter">
              <CountUp
                end={435}
                enableScrollSpy={enableScrollSpy}
                scrollSpyOnce={scrollSpyOnce}
              />
            </div>
            <h3>accident-free days</h3>
          </div>
          <div className="counter-box">
            <div className="icon">
              <Icon icon="healthicons:accident-and-emergency-outline" />
            </div>
            <div className="counter">
              <CountUp
                end={1500}
                enableScrollSpy={enableScrollSpy}
                scrollSpyOnce={scrollSpyOnce}
              />
            </div>
            <h3>accident-free days</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
