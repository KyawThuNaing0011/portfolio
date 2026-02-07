import { motion } from "framer-motion";
import musicImage from "../assets/music.jpeg"
import quizImage from "../assets/quiz.png"
import notepadImage from "../assets/notepad.jpeg"
import portfolioImage from "../assets/portfolio.jpeg"
import carshowroomImage from "../assets/carshowroom.jpeg"
import mywatchImage from "../assets/watch.jpeg"
import "./projects.css";

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Music App",
      description:
        "A full-featured music-app with cart functionality, payment integration, and admin dashboard.",
      technologies: ["Flutter", "Node.js", "MySql"],
      image: <img src={musicImage} alt="project1" />,
    },
    {
      id: 2,
      title: "Notepad",
      description:
        "A productivity app that helps your to-do-list, edit,update and save on notepad.",
      technologies: ["Flutter", "Firebase"],
      image: <img src={notepadImage} alt="project2" />,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website with modern animations and smooth transitions.",
      technologies: ["React", "Framer Motion", "CSS3"],
      image: <img src={portfolioImage} alt="project3" />,
    },
    {
      id: 4,
      title: "Quiz",
      description:
        "A quiz application that allows users to test their knowledge through interactive questions.",
      technologies: ["PHP", "CSS3", "MySql"],
      image: <img src={quizImage} alt="project4" />,
    },
    {
      id: 5,
      title: "CarShowRoom",
      description:
        "A modern car showroom website showcasing vehicles, features, and pricing details.",
      technologies: ["java", "MySql"],
      image: <img src={carshowroomImage} alt="project5" />,
    },
    {
      id: 6,
      title: "My Watch",
      description:
        "MyWatch is a smart monitoring platform designed to track activity, insights, and performance in real time.",
      technologies: ["javascript", "CSS3", "jquery"],
      image: <img src={mywatchImage} alt="project6" />,
    },
  ];

  return (
    <motion.section
      className="projects-section"
      id="projects"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="section-title"
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  {project.image}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <motion.a
                    href="https://github.com/KyawThuNaing0011"
                    className="btn primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Demo
                  </motion.a>
                  <motion.a
                    href="https://github.com/kyawthunaing0969"
                    className="btn outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
