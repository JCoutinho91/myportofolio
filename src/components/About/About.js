import "./About.css";
function About() {
  return (
    <div className="About">
      <div className="about__left">
        <div className="about__card bg"></div>
        <div className="about__card">
          <img
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="about__img"
          />
        </div>
      </div>
      <div className="about__right">
        <h1 className="about__title">About Me</h1>
        <p className="about__sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="about__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
      </div>
    </div>
  );
}

export default About;
