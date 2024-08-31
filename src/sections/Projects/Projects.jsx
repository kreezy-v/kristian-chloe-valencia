import styles from "./ProjectStyles.module.css";
import pascalsApp from "../../assets/pascalsApp.jpg";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pascalsApp}
          link="https://github.com/kreezy-v/Pascals-App"
          h3="Pascals App"
          p="Pascals Traingle Program"
        />
        <ProjectCard
          src={pascalsApp}
          link=""
          h3="Pascals App"
          p="Pascals Traingle Program"
        />
        <ProjectCard
          src={pascalsApp}
          link=""
          h3="Pascals App"
          p="Pascals Traingle Program"
        />
        <ProjectCard
          src={pascalsApp}
          link=""
          h3="Pascals App"
          p="Pascals Traingle Program"
        />
        <ProjectCard
          src={pascalsApp}
          link=""
          h3="Pascals App"
          p="Pascals Traingle Program"
        />
        <ProjectCard
          src={pascalsApp}
          link=""
          h3="Pascals App"
          p="Pascals Traingle Program"
        />
      </div>
    </section>
  );
}

export default Projects;
