import styles from "./ProjectCard.module.scss";
import { useState } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import { ReactComponent as HiPlus } from "../../../assets/icons/HiPlus.svg";

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
}

function ProjectCard({ projectData }: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModalClose() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className={styles.projectCard} onClick={() => setModalIsOpen(true)}>
        <div className={styles.imgContainer}>
          <img src={projectData.projectScreenshot} alt="project screenshot" />
          <div className={styles.imgOverlay}>
            <HiPlus />
          </div>
        </div>
        <div className={styles.textContainer}>
          <h3>{projectData.projectName}</h3>
        </div>
      </div>
      {modalIsOpen ? (
        <ProjectModal
          handleModalClose={handleModalClose}
          projectData={projectData}
          key="modal"
        />
      ) : null}
    </>
  );
}

export default ProjectCard;
