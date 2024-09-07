import { useState, useEffect } from "react";
import styles from "./NavbarStyles.module.css";
import menu from "../../assets/burger-menu.svg";
import { useTheme } from "../../common/ThemeContext";

function Navbar({ refs }) {
  const { home, projects, skills, about } = refs;

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const menuIcon = theme === "light" ? "none" : "";
  var boxShadow = "";
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setScrolled(false);
      } else if (window.scrollY > 100) {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!scrolled) boxShadow = "none";

  return (
    <header className={styles.header} style={{ boxShadow: boxShadow }}>
      <input type="checkbox" id={styles.menu} />
      <a href="/" className={styles.logo}>
        Ian
      </a>
      <nav className={styles.navbar}>
        <a onClick={() => scrollToSection(home)}>Home</a>
        <a onClick={() => scrollToSection(projects)}>Projects</a>
        <a onClick={() => scrollToSection(skills)}>Skills</a>
        <a onClick={() => scrollToSection(about)}>About</a>
      </nav>
      <label for={styles.menu}>
        <img src={menu} alt="navigation" style={{ filter: menuIcon }} />
      </label>
    </header>
  );
}

export default Navbar;
