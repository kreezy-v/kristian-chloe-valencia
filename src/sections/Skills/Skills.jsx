import styles from "./SkillsStyles.module.css";
import figmaLogo from "../../assets/SkillIconsFigmaLight.png";
import githubLogo from "../../assets/SkillIconsGithubLight.png";
import javaLogo from "../../assets/SkillIconsJavaLight.png";
import javaScriptLogo from "../../assets/SkillIconsJavascript.png";
import nodeJSLogo from "../../assets/SkillIconsNodejsLight.png";
import mysqlLogo from "../../assets/SkillIconsMysqlLight.png";
import phpLogo from "../../assets/SkillIconsPHPLight.png";
import cSharpLogo from "../../assets/SkillIconsCsharpLight.png";
import htmlLogo from "../../assets/SkillIconsHtmlLight.png";
import cssLogo from "../../assets/SkillIconsCssLight.png";
import reactLogo from "../../assets/SkillIconsReactLight.png";
import bootstrapLogo from "../../assets/SkillIconsBootstrapLight.png";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="HTML" logo={htmlLogo} />
        <SkillList skill="CSS" logo={cssLogo} />
        <SkillList skill="JavaScript" logo={javaScriptLogo} />
        <SkillList skill="NodeJS" logo={nodeJSLogo} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="React" logo={reactLogo} />
        <SkillList skill="Bootstrap" logo={bootstrapLogo} />
        <SkillList skill="PHP" logo={phpLogo} />
        <SkillList skill="MySQL" logo={mysqlLogo} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="C#" logo={cSharpLogo} />
        <SkillList skill="JAVA" logo={javaLogo} />
        <SkillList skill="Github" logo={githubLogo} />
        <SkillList skill="Figma" logo={figmaLogo} />
      </div>
    </section>
  );
}

export default Skills;
