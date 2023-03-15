import styles from "./ProjectModal.module.scss";
import { ReactComponent as BsX } from "../../../assets/icons/BsX.svg";
import { motion } from "framer-motion";

interface Props {
  projectData: {
    id: string;
    projectName: string;
    projectWebsite: string;
    githubLink: string;
    projectType: string;
    techStack: string[];
    description: string;
    projectScreenshot: string;
    date: string;
  };
  handleModalClose: Function;
}

function ProjectModal({ projectData, handleModalClose }: Props) {

  return (
    <>
      <motion.div
        className={styles.darkBG}
        onClick={() => handleModalClose()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
      />
      <motion.div
        className={styles.modalContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
      >
        <div className={styles.modal}>
          <button
            className={styles.closeBtn}
            onClick={() => handleModalClose()}
          >
            <BsX />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.imgContainer}>
              <img
                src={projectData.projectScreenshot}
                alt="project screenshot"
              />
            </div>
            <div className={styles.textContainer}>
              <h3>{projectData.projectName}</h3>
              <div className={styles.buttonsContainer}>
                <div>
                  <a href={projectData.projectWebsite} target="_blank">
                    <button className={styles.linkButton}>View</button>
                  </a>
                </div>
                <div>
                  <a href={projectData.projectWebsite} target="_blank">
                    <button className={styles.linkButton}>GitHub</button>
                  </a>
                </div>
              </div>
              <p>Project type: {projectData.projectType} </p>
              <div className={styles.techStack}>
                <p>Tech stack</p>
                <div className={styles.gridContainer}>
                  {projectData.techStack.map((tech) => {
                    return (
                      <div>
                        <p>{tech}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.description}>
                <p>Description</p>
                <p>{projectData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectModal;
