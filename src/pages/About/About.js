import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
      <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://media.licdn.com/dms/image/D4D03AQE5Go4slxildQ/profile-displayphoto-shrink_800_800/0/1687258447402?e=2147483647&v=beta&t=EiYNwOKCUlIqf8kVL6jc-aiNjcC0ao3MKY4ivgdMwvg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Hello there! I'm Rahul Jha, a passionate B.Tech Student majoring in Information Technology at LNCT, Bhopal. My journey in the world of technology has been exhilarating and I
             have a solid foundation in Core Java, I am well-versed in object-oriented programming, data structure and algorithm. As a fervent problem solver, I have honed my skills in Data Structures and Algorithms, regularly challenging myself on different platform. Tackling complex coding challenges is not only a hobby but a rewarding way to grow and improve my problem-solving acumen.
             I have immersed myself in the art of Full Stack Web Development. From designing responsive user interfaces with HTML, CSS and JavaScript to handling server-side operations using Node.js and Express.
             I am now eagerly seeking new opportunities to apply my skills and knowledge as a Software Developer and related profiles.
              <br/>
              <hr/>
              <div className="quote">
              <b>👉Jack of all trades master of none, still any day better than master of one 🏆</b>
              </div>
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;