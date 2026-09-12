
function SkillCard({ name }) {
  return (
    <li className="card">{name}</li>
  );
}

function SkillBox() {
  const skills = ["HTML", "CSS", "Teaching"];
  return (
    <ul className="skill-box">
      {skills.map((s) => (
        <SkillCard key={s} name={s} />
      ))}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById("react-skill-root"));
root.render(<SkillBox />);
