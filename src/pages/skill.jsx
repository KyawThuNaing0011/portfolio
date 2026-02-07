import { motion } from "framer-motion";
import "./skill.css";

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Skills data
  const skills = [
    { name: "HTML", level: 95, color: "#f16529" },
    { name: "CSS", level: 90, color: "#264de4" },
    { name: "JavaScript", level: 92, color: "#f7df1e" },
    { name: "React", level: 80, color: "#61dafb" },
    { name: "Mobile", level: 90, color: "#3178c6" },
    { name: "Node.js", level: 90, color: "#68a063" },
    { name: "Python", level: 65, color: "#3776ab" },
    { name: "PHP", level: 80, color: "#ff6384" },
    { name: "C#", level: 80, color: "#aa9ba2" },
  ];

  return (
    <motion.section
      className="skills-section"
      id="skills"
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
          My Skills
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certifications"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h3>Certifications</h3>
          <div className="cert-list">
            <motion.div
              className="cert-item"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h4>Frontend Development Certification</h4>
              <p>BrainwaveData | 2023</p>
            </motion.div>
            <motion.div
              className="cert-item"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h4>Notejs Certificate</h4>
              <p>BrainwaveData | 2022-2023</p>
            </motion.div>
            <motion.div
              className="cert-item"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h4>Mobile Development Certificate</h4>
              <p>Rayhub| 2022-2023</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;