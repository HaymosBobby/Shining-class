import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroComp = ({ element }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.6,
  });

  return (
    <div ref={ref} className="hero-container">
      <img src={element.imgLink} alt={element.title} />
      <div className="content-container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          // exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {element.title}
        </motion.h1>
        <motion.p
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {element.description}
        </motion.p>
        <motion.div
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="buttons"
        >
          <Link>
            <button className="btn btn-pry">Exlpore</button>
          </Link>
          <Link>
            <button className="btn btn-sec">Contact</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroComp;

// ,
//         "responsive": [
//           {
//             "breakpoint": 991,
//             "settings": {
//               "slidesToShow": 1,
//               "autoplay": true
//             }
//           }
//         ]
