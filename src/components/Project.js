import React, { useState } from "react";
import piggy from "../images/piggy.png";
import cuting from "../images/cuting.jpg";
import { HiCursorClick } from "react-icons/hi";
import { GrLinkNext, GrPrevious } from "react-icons/gr";

const Project = () => {
  return (
    <div className="container-div">
      <h1 className="hashtag-title">#Project</h1>
      <div className="project-div">
        <section>
          <div className="project-Img-zone">
            <img src={piggy} id="piggys" alt="pig project" width="700px" />
          </div>
        </section>
        <section id="cuting-position">
          <div className="project-Img-zone">
            <img src={cuting} id="cuting-img" alt="cuting UI" width="700px" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
