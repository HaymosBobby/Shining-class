import Slider from "react-slick";
import HeroComp from "./HeroComp";
import "slick-carousel/slick/slick.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data }) => {
  useEffect(() => {}, []);

  const { useFor, info, settings } = data;
  if (useFor === "hero") {
    return (
      <Slider
        {...settings}
       
      >
        {info.map((element, index) => {
          return (
            <HeroComp element={element} key={index} />
          );
        })}
      </Slider>
    );
  }
};

export default Carousel;
