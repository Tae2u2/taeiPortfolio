import React, { useState } from "react";
import piggy from "../images/travel-pig.jpg";
import cuting from "../images/cuting.png";
import petals from "../images/petals-logo.png";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub, BsImages } from "react-icons/bs";
import { GrLinkNext, GrPrevious } from "react-icons/gr";

const Project = ({ changeNav }) => {
  const travelPigText = ``;
  const petalsText = ``;
  const cutingText = ``;

  return (
    <div className={changeNav ? "container-div wider-screen" : "container-div"}>
      <h1 className="hashtag-title">#PROJECT</h1>
      <div className="project-div">
        <section>
          <div>
            <div className="project-Img-zone">
              <img src={piggy} id="piggys" alt="pig project" width="240px" />
            </div>
            <div className="button-set">
              <button className="link-btn">
                <BsGithub />
              </button>
              <button className="link-btn">
                <BsImages />
              </button>
              <button className="link-btn">
                <BiLinkExternal />
              </button>
            </div>
          </div>
          <p>{travelPigText}</p>
        </section>
        <section id="petal-position">
          <p>{petalsText}</p>
          <div>
            <div className="project-Img-zone">
              <img
                src={petals}
                id="petal-img"
                alt="sns clone project"
                width="240px"
              />
            </div>
            <div className="button-set">
              <button className="link-btn">
                <BsGithub />
              </button>
              <button className="link-btn">
                <BsImages />
              </button>
              <button className="link-btn">
                <BiLinkExternal />
              </button>
            </div>
          </div>
        </section>
        <section id="cuting-position">
          <div>
            <div className="project-Img-zone">
              <img src={cuting} id="cuting-img" alt="cuting UI" width="240px" />
            </div>
            <div className="button-set">
              <button className="link-btn">
                <BsGithub />
              </button>
              <button className="link-btn">
                <BsImages />
              </button>
              <button className="link-btn">
                <BiLinkExternal />
              </button>
            </div>
          </div>
          <p>{cutingText}</p>
        </section>
      </div>
    </div>
  );
};

export default Project;
