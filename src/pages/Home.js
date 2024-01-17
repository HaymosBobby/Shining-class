import About from "../components/About";
import Hero from "../components/Hero";
import data from "../util/data.json";

const Home = () => {
  const { sliderData } = data;
  return (
    <main>
      <Hero data={sliderData.heroData} />
      <About />
    </main>
  );
};

export default Home;
