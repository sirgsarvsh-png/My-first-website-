function SkillCard({ name }) {
  return (
    <li className="card">{name}</li>
  );
}

function Likebutton() {
  const [likes, setLikes] = React.useState(0);
  return (
    <button onClick={() => setLikes(likes + 1)}>
      likes : {likes}
    </button>
  );
}

function SkillBox() {
  const skills = ["HTML", "CSS", "Teaching"];
  return (
    <div>
      <ul className="skill-box">
        {skills.map((s) => (
          <SkillCard key={s} name={s} />
        ))}
      </ul>
      <Likebutton/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("react-skill-root"));
root.render(<SkillBox />);
