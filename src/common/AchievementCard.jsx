function AchievementCard({ link, header, p, date }) {
  return (
    <a href={link} target="_blank">
      <div>
        <h3>{header}</h3>
        <p>{p}</p>
        <span>{date}</span>
        <br />
        <a href={link} target="_blank">
          See more
        </a>
      </div>
    </a>
  );
}

export default AchievementCard;
