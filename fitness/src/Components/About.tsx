import { motion } from "framer-motion";
import aboutImage from "../assets/width_1600 (1).webp";

const About = () => {
   const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      } as const
    }
  };

   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="row-container-about padding-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
          viewBox="2.2 0.2 184.2 100.0"
          zoomAndPan="magnify"
          style={{
            fill: "rgb(0, 0, 0)",
            zIndex: 3,
            position: "absolute",
            top: "180px",
            left: "200px",
          }}
          width="163.38164614720216px"
          height="88.83877009254117px"
        >
          <g id="__id2_svoukb8a0i">
            <path
              d="M2.2,0.2v26l31,24l-31,24v26l64.6-50L2.2,0.2z M3.5,74.8l31.8-24.6L3.5,25.5V2.8l61.2,47.3L3.5,97.5V74.8z M62,0.2v26l31,24l-31,24v26l64.6-50L62,0.2z M63.3,74.8l31.8-24.6L63.3,25.5V2.8l61.2,47.3L63.3,97.5V74.8z M121.8,0.2v26l31,24 l-31,24v26l64.6-50L121.8,0.2z M123.1,74.8l31.8-24.6l-31.8-24.6V2.8l61.2,47.3l-61.2,47.3V74.8z"
              style={{ fill: "rgb(254, 110, 16)" }}
            />
          </g>
        </svg>

        <div className="gradient-about"></div>
        <img src={aboutImage} className="about-image " />
        <div className=""></div>

        <motion.div 
          className="column-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p 
            className="strong-font orange large-text"
            variants={slideInRight}
          >
            About Us
          </motion.p>
          <motion.p 
            className="white small-text small-container"
            variants={slideInRight}
          >
            Founded in 2017, Alpha Fitness & Self Defence (Govt. Reg.) was born
            out of a passion for teaching authentic self-defense and empowering
            individuals of all backgrounds. With expertise in Kyokushin Karate,
            Krav Maga, Judo, and Taekwon-do, we strive to equip students with
            practical combat skills, discipline, and confidence. Our dojo is a
            space for growth—physically, mentally, and emotionally—where
            everyone is encouraged to push boundaries and discover their inner
            strength. Whether you're here to master martial arts or improve your
            fitness, you'll find a supportive community and dedicated guidance
            every step of the way.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;