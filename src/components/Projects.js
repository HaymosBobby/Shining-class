import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-container">
        <div className="project-heading">
          <h4>Our works</h4>
          <h2>Latest Projects</h2>
          <p>
            Discover our impressive mining projects, showcasing our expertise in
            extracting valuable resources sustainably and efficiently. Explore
            our latest ventures and see how we're shaping the future of the
            mining industry!
          </p>
        </div>

        <div className="project-container">
          <div className="project">
            <img src="/images/gold-pit.jpg" alt="" />
            <div className="content">
              <h3>Explosive handling</h3>
              <h4>Extraction</h4>
              <div className="view-more">
                <button>View more</button>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/gold-pit.jpg" alt="" />
            <div className="content">
              <h3>Explosive handling</h3>
              <h4>Extraction</h4>
              <div className="view-more">
                <Link to={"/"}>
                  <button>View more</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/gold-pit.jpg" alt="" />
            <div className="content">
              <h3>Explosive handling</h3>
              <h4>Extraction</h4>
              <div className="view-more">
                <button>View more</button>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/gold-pit.jpg" alt="" />
            <div className="content">
              <h3>Explosive handling</h3>
              <h4>Extraction</h4>
              <div className="view-more">
                <button>View more</button>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/gold-pit.jpg" alt="" />
            <div className="content">
              <h3>Explosive handling</h3>
              <h4>Extraction</h4>
              <div className="view-more">
                <button>View more</button>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/gold-pit.jpg" alt="" />
            <div className="content">
              <h3>Explosive handling</h3>
              <h4>Extraction</h4>
              <div className="view-more">
                <button>View more</button>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/gold-pit.jpg" alt="" />
            <div className="content">
              <h3>Explosive handling</h3>
              <h4>Extraction</h4>
              <div className="view-more">
                <button>View more</button>
              </div>
            </div>
          </div>
          <div className="project">
            <img src="/images/gold-pit.jpg" alt="" />
            <div className="content">
              <h3>Explosive handling</h3>
              <h4>Extraction</h4>
              <div className="view-more">
                <button>View more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
