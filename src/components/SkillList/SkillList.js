import Skills from "../Skills/Skills";
import "./SkillList.css";

function SkillList() {
  return (
    <div className="Skills">
      <div className="skill__text">
        <h1 className="skills__title">MERN Stack </h1>
        <p className="skills__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus
          nisi repudiandae magni nemo ut obcaecati ad, adipisci sapiente
          consequuntur quam illo cum inventore cupiditate alias culpa minus
          totam velit.
        </p>
      </div>
      <div className="skills__list">
        <Skills />
        <Skills />
        <Skills />
        <Skills />
        <Skills />
      </div>
    </div>
  );
}

export default SkillList;
