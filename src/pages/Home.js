import About from "../components/About";
import Hero from "../components/Hero";
import data from "../util/data.json";

const Home = () => {
  const { sliderData, aboutData } = data;
  return (
    <main>
      <Hero data={sliderData.heroData} />
      <About aboutData={aboutData}/>
    </main>
  );
};

export default Home;
