import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { skill: "HTML", color: "red", level: "advanced" },
  { skill: "CSS", color: "green", level: "intermediate" }, 
  { skill: "JavaScript", color: "yellow", level: "advanced" },
  { skill: "React", color: "cyan", level: "beginner" },
  { skill: "Node.js", color: "lightgreen", level: "intermediate" },
  { skill: "Python", color: "#b700ffff", level: "intermediate" }
]

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => {
  return (
    <img
      className="avatar"
      src="avatar.png"
      alt="My Avatar"
    />
  );
};

const Intro = () => {
  return (
    <div className="intro">
      <h1>Vimal kumar B</h1>
      <p>Full Stack Web Developer, Working as a software engineer. Passionate on new technologies and continuous learning.</p>
    </div>
  );
};

const SkillList = () => {
  return <div className="skill-list">
    {
      skills.map((skill) => (
        <Skill 
          skillObj={skill}
        />
      ))
    }
    {/* <Skill skill="HTML" emoji="🔥" color="red"/>
    <Skill skill="CSS" emoji="🎨" color="green"/>
    <Skill skill="JavaScript" emoji="💻" color="yellow"/>
    <Skill skill="React" emoji="⚛️" color="cyan"/>
    <Skill skill="Node.js" emoji="🌳" color="lightgreen"/>
    <Skill skill="Python" emoji="🐍" color="#b700ffff"/> */}
  </div>
}

const Skill = (props) => {
  return (
    <div className="skill" style={{backgroundColor: props.skillObj.color}}>
      <span>{props.skillObj.skill}</span>
      <span>{props.skillObj.level === 'advanced' ? '🔥' : props.skillObj.level === 'intermediate' ? '💪' : '🌱'}</span>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
