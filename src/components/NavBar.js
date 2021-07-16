import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

function NavBar() {
  return (
    <div>
      <nav
      id="nbar"
        className="navbar navbar-light nb"
        style={{
          backgroundColor: "#0d3b66",
          justifyContent: "flex-start",
          boxShadow:"3px 3px 10px #fb8500",
          position: "fixed",
          zIndex: "2",
          width: "100%",
        }}
      >


        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => scrollTo("#about")}
        >
          About
        </button>

        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => scrollTo("#education")}
        >
          Education
        </button>

        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => scrollTo("#skill")}
        >
          Skills
        </button>

        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => scrollTo("#experience")}
        >
          Experience
        </button>
            <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => scrollTo("#project")}
        >
          Projects
        </button>   
      </nav>
    </div>
  );
}

export default NavBar;