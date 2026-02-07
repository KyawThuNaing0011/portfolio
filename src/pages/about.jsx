import { motion } from "framer-motion";
import ktnImg from "../assets/thu.png"
import "./about.css";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      className="about-section"
      id="about"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="about-content" variants={itemVariants}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-title"
          >
            About Me
          </motion.h2>

          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p>
                Hello! I'm a passionate Frontend Developer with expertise in
                creating modern, responsive, and user-friendly web applications.
                I love turning complex problems into simple, beautiful designs.
              </p>

              <p>
                I am currently studying web development and actively building
                projects using modern technologies. I focus on React,
                JavaScript, modern CSS, and mobile-first design to create fast
                and responsive applications
              </p>

              <p>
                When I'm not coding, you can find me exploring new design
                trends, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="image-placeholder">
                <span>
                  <img src={ktnImg} alt="ktn" />
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="stats-container"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="stats-grid">
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>5+</h3>
              <p>Months Experience</p>
            </motion.div>
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>10+</h3>
              <p>Projects Completed</p>
            </motion.div>
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>10+</h3>
              <p>Happy Clients</p>
            </motion.div>
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>3+</h3>
              <p>Awards Won</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;