function SkillCard({ name }) {
  return (
    <li className="card">{name}</li>
  );
}

function Likebutton() {
  const [likes, setLikes] = React.useState(0);
  return (
    <div>
      
    <button onClick={() => setLikes(likes + 1)}>
      likes : {likes}
    </button>
      { likes > 5 && <p> 🌹wah!5+ Likes!</p>}
    </div>
  );
}
function Feedback(){
  const [name,setName] = React.useState (" ");
  return (
    <div>
      <input
        type = "text"
  placeholder = "Apna nam likho"
        value = {name}
      onChange = {(e) => setName(e.target.value)}
        />
      <p>Namaste ,{name}</p>
      </div>
    );
}

function SkillBox() {
  const skills = ["HTML", "CSS", "Teaching"];
  React.useEffect (() => {
    console.log ("Skill section load ho gya!");
  }, []);
  return (
    <div>
      <ul className="skill-box">
        {skills.map((s) => (
          <SkillCard key={s} name={s} />
        ))}
      </ul>
      <Likebutton/>
      <Feedback/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("react-skill-root"));
root.render(<SkillBox />);
