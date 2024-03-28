import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import { MdOutlineWorkOutline } from "react-icons/md";
const WorkExp = () => {
  return (
    <>
     <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Internship
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="June 2023 - July 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdOutlineWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
              Persistant Martian Summer Intership
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle">
                Persistant
              </h4> */}
              <p>
              Acquired practical skills in responsive design techniques and deployment strategies.Demonstrated the ability to
              create visully appealing and interactive websites with seamless user experiences.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="May 2022 - Jan 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdOutlineWorkOutline /> }
            >
              <h3 className="vertical-timeline-element-title">
                Cisco Virtual Internship
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle">
                xyz,
              </h4> */}
              <p>
              With using packet tracer over time I got virtual experience of designing network topology for my college campus.
               The connection using cables, configuration of networking devices such as switches, routers, PCs, server and others.
              </p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2018 - 2020"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdOutlineWorkOutline /> }
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                xyz, pvt ltd
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement> */}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;