import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import facebookLight from "../../assets/facebook-light.svg";
import facebookDark from "../../assets/facebook-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import mailLight from "../../assets/mail-light.svg";
import mailDark from "../../assets/mail-dark.svg";
import CV from "../../assets/LatestCV_Valencia.pdf";
import { useTheme } from "../../common/ThemeContext";
import { useRef } from "react";

function Hero() {
  const home = useRef(null);
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const facebookIcon = theme === "light" ? facebookLight : facebookDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const mailIcon = theme === "light" ? mailLight : mailDark;

  return (
    <section id="hero" className={styles.container} ref={home}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Kristian Chloe Valencia"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Kristian Chloe
          <br />
          Valencia
        </h1>
        <h2>Aspiring Software Engineer</h2>
        <span>
          <a href="https://www.facebook.com/Kreezy.V" target="_blank">
            <img src={facebookIcon} alt="Facebook icon" />
          </a>
          <a href="https://github.com/kreezy-v" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kristian-chloe-valencia/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
          <a href="mailto:valenciakristianchloe@gmail.com">
            <img src={mailIcon} alt="Mail icon" />
          </a>
        </span>
        <p className={styles.description}>
          A dependable and fast learner aspiring software engineer ready to
          partake in the professional industry. I am looking for a role where I
          can grow and learn from experienced team members while utilize my
          abilities and collaborative spirit to help the company reach new
          heights of success.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
