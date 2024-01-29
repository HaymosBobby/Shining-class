import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroComp = ({ element }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="hero-container">
      <img src={element.imgLink} alt={element.title} />

      <div className="content-container">
        {inView && (
          <>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-offset="10"
            >
              {element.title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-offset="0"
            >
              {element.description}
            </p>
            <div
              className="buttons"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <Link>
                <button className="btn btn-pry">Exlpore</button>
              </Link>
              <Link>
                <button className="btn btn-sec">Contact</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroComp;

//  <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
//           // exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.8 }}
//         >
//           {element.title}
//         </motion.h1>
//         <motion.p
//           animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           {element.description}
//         </motion.p>
//         <motion.div
//           animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="buttons"
//         >
//           <Link>
//             <button className="btn btn-pry">Exlpore</button>
//           </Link>
//           <Link>
//             <button className="btn btn-sec">Contact</button>
//           </Link>
//         </motion.div> 

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
