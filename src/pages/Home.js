import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import data from "../util/data.json";

const Home = () => {
  const { sliderData, aboutData, servicesData, testimonialsData } = data;
  return (
    <main>
      <Hero data={sliderData.heroData} />
      <About aboutData={aboutData} />
      <Services servicesData={servicesData} />
      <Testimonial testimonialsData={testimonialsData} />
      <Projects />
    </main>
  );
};

export default Home;
