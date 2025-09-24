import { motion } from "framer-motion";
import logo from "../assets/width_200.webp";
import heroImage from "../assets/width_1600.webp";

const Hero = () => {
   const slideInVariants = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <>
      <section id="hero" className="hero-section">
        <div className="row-container margin-top">
          <img src={logo} className="logo" />
          <div className="column-container">
            <p className="strong-font orange medium-text">Alpha</p>
            <p className="strong-font orange small-text">
              Fitness & Self Defense
            </p>
          </div>
        </div>

        <div className="row-container margin-top">
          <motion.div 
            className="column-container gap-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              className="strong-font white extra-large-text"
              variants={slideInVariants}
            >
              Welcome
            </motion.p>
            <motion.p 
              className="strong-font white extra-large-text"
              variants={slideInVariants}
            >
              To <span className="orange">alpha</span> dojo —
            </motion.p>
            <motion.p 
              className="strong-font white extra-large-text"
              variants={slideInVariants}
            >
              where warriors
            </motion.p>
            <motion.p 
              className="strong-font white extra-large-text"
              variants={slideInVariants}
            >
              are made!
            </motion.p>
            <motion.a 
              className="button margin-top"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Join Now
            </motion.a>
          </motion.div>
          <div className="gradient"></div>
          <img src={heroImage} className="hero-image"></img>
        </div>
      </section>
    </>
  );
};

export default Hero;