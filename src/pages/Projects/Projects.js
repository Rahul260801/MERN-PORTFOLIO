import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
          <div className="continer project" id="projects">
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
      TOP RECENT PROJECTS
    </h2>
    <hr />
    <p className="pb-3 text-center">
                  Here are my latest Projects ,feel free to check them out! 😊
    </p>
    {/* card design */}
    <div className="row" id="ads">
    <Spin>
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">Full stack</span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkFbaYRfYOLKGQqBruz412nWBFGRyiwptNQ&usqp=CAU"
                alt="project1"
              />
            </div>
            <div className="card-image-overly m-auto mt-3">
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">React</span>
              <span className="card-detail-badge">Mongodb</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase">
                   WanderLust
                </h5>
              </div>
              <a className="ad-btn" href="https://github.com/Rahul260801/WanderLust">View</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Web App</span>
                  <img
                    src="https://marketplace.canva.com/EAFxdcos7WU/1/0/1600w/canva-dark-blue-and-brown-illustrative-fitness-gym-logo-oqe3ybeEcQQ.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Java</span>

                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>

                  <span className="card-detail-badge">JS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Gymifier</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Rahul260801/Gymifier"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FrontEnd</span>
                  <img
                    src="https://image.smythstoys.com/zoom/189714_3.jpg"
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>

                  <span className="card-detail-badge">JS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Simon's Game</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/Rahul260801/Simon-s-Game">
                    View
                  </a>
                </div>
              </div>
            </div>
            </Spin>
       </div>
  </div>
    </>
  );
};

export default Projects;