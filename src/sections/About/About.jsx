import styles from "./AboutStyles.module.css";
import aboutMePic from "../../assets/aboutMe.jpg";
import AchievementCard from "../../common/AchievementCard";
function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">About</h1>
      <div className={styles.aboutMe}>
        <div>
          <h3>
            I’m Kristian, an aspiring full-stack engineer passionate about
            building tech that empowers users.
          </h3>
          <p>
            Kristian was born in Kalibo, Aklan Philippines but migrated to
            Streamwood, Illinois. He has a degree of Bachelor of Science in
            Computer Science and is always passionate about building things with
            the use of technology. Now, he is ready to leverage his skills to
            make an make an impact to the users' life.
          </p>
        </div>
        <div>
          <div>
            <img src={aboutMePic} alt="Photo of Kristian" />
          </div>
        </div>
      </div>

      <h3>Milestones and Achievements</h3>
      <div className={styles.achievements}>
        <AchievementCard
          link="https://www.facebook.com/ACE.CICS/posts/pfbid02zi3yij275CDnv3b95RUnhsmrZaRLgSemW2UxjkRxhbfggZ6zaG2j9gFBQAa5BU4Ul"
          header="2nd PMAP Innovation Hackathon Winner"
          p="Team DSMAP with their Fall Armyworms Disease and Mobile App Innovation which helps farmers from the Cagayan Region with their agriculture industry."
          date="May 2023"
        />
        <AchievementCard
          link="https://www.facebook.com/photo/?fbid=936698188470255&set=pcb.936701068469967"
          header="GRADUATE CLASS OF 2024"
          p="Academic Distinction"
          date="July 2024"
        />
      </div>
    </section>
  );
}

export default About;
