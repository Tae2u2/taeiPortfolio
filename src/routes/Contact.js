import React, { useState } from "react";
import "../style/routes-style.sass";
import { FaGithub, FaGoogle, FaPhoneAlt, FaChild } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";

const Contact = () => {
  const [tel, setTel] = useState("연락처");
  const [successCopy, setSuccessCopy] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kangnimell@gmail.com");
    setSuccessCopy(true);
    setTimeout(() => setSuccessCopy(false), 1000);
  };

  return (
    <div className="container-div">
      <div className="contact-div">
        <div className="id-card">
          <p>
            숭실대학교 졸업 (2017.02) / 3.12
            <br />
            숭실사이버대학교 시각디자인학과 중퇴 <br />
            (2019.09 ~ 2020.06)
          </p>
          <hr />
          <p>
            스프링 클라우드를 활용한 SW전문가 양성 교육 이수
            <br />
            kGITBANK (2020.04 ~ 09.17, 6개월)
            <br />
            JAVA, SpringMVC, JSP, Oracle 교육 이수
          </p>
          <hr />
          <p>
            정보처리기사 2021.08 취득
            <br />
            ADsP 2020.09 취득
          </p>
          <span>
            <FaChild />
          </span>
        </div>
        <div className="contact-card">
          <a href="https://github.com/Tae2u2">
            <h4>
              <FaGithub />
              GitHub
              <HiCursorClick />
            </h4>
          </a>
          <h4
            onClick={() =>
              tel === "연락처" ? setTel("010-9349-0913") : setTel("연락처")
            }
          >
            <FaPhoneAlt />
            {tel}
            <HiCursorClick />
          </h4>
          <h4 onClick={copyEmail}>
            <FaGoogle />
            kangnimell@gmail.com
            <HiCursorClick />
          </h4>
          {successCopy && <small>이메일이 복사되었습니다!!</small>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
