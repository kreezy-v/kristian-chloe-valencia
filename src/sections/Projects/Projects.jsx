import styles from "./ProjectStyles.module.css";
import pascalsApp from "../../assets/pascalsApp.jpg";
import caugthsceneWeb from "../../assets/caughtsceneLogo.png";
import secureVoteApp from "../../assets/securevoteLogo.png";
import binomialApp from "../../assets/binomialExpansionLogo.png";
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
          src={secureVoteApp}
          link="https://github.com/kreezy-v/securevote-face-recognition-based-voting-system"
          h3="SecureVote"
          p="Face Recognition Based App"
        />
        <ProjectCard
          src={caugthsceneWeb}
          link="https://github.com/kreezy-v/caughtscene-movie-website"
          h3="CaughtScene"
          p="Movie Website"
        />
        <ProjectCard
          src={binomialApp}
          link="https://github.com/kreezy-v/binomial-expansion"
          h3="Binomial Expansion"
          p="Windows App Program"
        />
      </div>
    </section>
  );
}

export default Projects;
