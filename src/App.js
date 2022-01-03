import "./App.css";
import About from "./components/About/About";
import Intro from "./components/intro/Intro";
import SkillList from "./components/SkillList/SkillList";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <SkillList />
    </div>
  );
}

export default App;
