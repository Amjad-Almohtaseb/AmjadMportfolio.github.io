import React from "react";

//icons
import { SiPostgresql } from "@react-icons/all-files/si/SiPostgresql";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import { SiDjango } from "@react-icons/all-files/si/SiDjango";

const Skills = () => {
  return (
    <center id="skill">
      <div className="card mb-3" style={{ maxWidth: "98%" }}>
        <div className="row no-gutters">
          <div className="col-md-4"></div>

          <div className="card-body">
            <br />
            <p className="card-title">TECHNICAL SKILLS</p>
            <br />
            <br />
            <p className="card-text about fsd">
              <h4>Coding Languages:</h4>
            </p>
            <br />
            <p className="card-text about"></p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SiJavascript style={{ width: "60px", height: "60px" }} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SiPython style={{ width: "60px", height: "60px" }} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SiHtml5 style={{ width: "60px", height: "60px" }} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SiCss3 style={{ width: "60px", height: "60px" }} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="card-text about fsd">Firmworks & Libraries:</p>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SiPostgresql style={{ width: "60px", height: "60px" }} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <FaNodeJs style={{ width: "60px", height: "60px" }} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SiReact style={{ width: "60px", height: "60px" }} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SiDjango style={{ width: "60px", height: "60px" }} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SiBootstrap style={{ width: "60px", height: "60px" }} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <SiRedux style={{ width: "60px", height: "60px" }} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            <img
              style={{ width: "200px", height: "60px" }}
              src="https://cdn-images-1.medium.com/max/1600/1*ypyKHfdnTbM-DZG-nZ5tRg.png"
              alt="react-native"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img
              style={{ width: "200px", height: "60px", color: "white" }}
              src="https://gfx4arab.com/wp-content/uploads/2020/07/express-109.svg"
              alt="express"
            />
            <br />
          </div>
        </div>
      </div>
      ‏
    </center>
  );
};

export default Skills;
