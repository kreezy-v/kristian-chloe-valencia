function SkillList({ skill, logo }) {
  return (
    <span>
      <img src={logo} alt={`${logo} icon`} />
      <span>
        <p>{skill}</p>
      </span>
    </span>
  );
}

export default SkillList;
