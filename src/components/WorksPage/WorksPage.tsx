import styles from "./WorksPage.module.scss";
import { motion } from "framer-motion";
import PageButton from "../PageButton/PageButton";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../../data/data";
import ProjectCard from "./ProjectCard/ProjectCard";

function WorksPage() {
  const navigation = useNavigate();

  function handleOnClick() {
    navigation("/contact");
  }
  return (
    <motion.div
      className={styles.worksPage}
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1, transition: { duration: 0.75 } }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
    >
      <div className={styles.worksPageContainer}>
        <div className={styles.pageNameContainer}>
          <h2>works</h2>
        </div>
        <div className={styles.worksContent}>
          <div className={styles.worksGridContainer}>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} projectData={project} />
            ))}
          </div>
          <div className={styles.pageButton}>
            <PageButton handleOnClick={handleOnClick}>Contact</PageButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WorksPage;
