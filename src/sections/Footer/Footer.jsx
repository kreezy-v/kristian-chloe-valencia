import styles from "./FooterStyles.module.css";
import facebookIcon from "../../assets/facebook-dark.svg";
import githubIcon from "../../assets/github-dark.svg";
import linkedinIcon from "../../assets/linkedin-dark.svg";
import mailIcon from "../../assets/mail-dark.svg";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        <b>&copy;</b> 2024 Kristian Chloe Valencia. <br />
        All rights reserved
      </p>
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
      <p>
        Made with Vite + React. Deployed in <b>Netlify</b>
      </p>
    </section>
  );
}

export default Footer;
