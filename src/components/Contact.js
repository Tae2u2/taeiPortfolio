import React, { useState } from "react";

import { FaGithub } from "react-icons/fa";

const Contact = ({ changeNav }) => {
  const [successCopy, setSuccessCopy] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kangnimell@gmail.com");
    setSuccessCopy(true);
    setTimeout(() => setSuccessCopy(false), 1000);
  };

  return (
    <div className={changeNav ? "container-div wider-screen" : "container-div"}>
      <h1 className="hashtag-title">#CONTACT</h1>
      <div className="contact-div">
        <div className="id-card">
          <h3>#MyINFo</h3>
          <p>
            숭실대학교 졸업 (2017.02) / 3.12
            <br />
            F&B서비스직 재직(2017.04 ~ 2019.12, 23개월)
            <br />
            숭실사이버대학교 시각디자인학과 중퇴 <br />
            (2019.09 ~ 2020.06)
            <br />
          </p>
          <hr />
          <p>
            코세라 Python 입문과정 수료(2020.10)
            <br />
            KGITBANK C언어, JSP 수업 수강
            <br />
            (2021.01 ~ 02)
            <br />
            스프링 클라우드를 활용한 SW전문가 양성 교육 이수
            <br />
            kGITBANK (2021.04 ~ 09.17, 6개월)
            <br />
            JAVA, SpringMVC, JSP, Oracle 교육 이수
          </p>

          <hr />
          <p>
            <br />
            정보처리기사 2021.08 취득
            <br />
            ADsP 2020.09 취득
          </p>
        </div>
        <div className="contact-card">
          <div>
            <h4 onClick={() => window.open("https://github.com/Tae2u2")}>
              <FaGithub />
              GitHub
            </h4>
          </div>
          <div>
            <h4>010-9349-0913</h4>
          </div>
          <div>
            <h4 onClick={copyEmail}>kangnimell@gmail.com</h4>
            {successCopy && <small>이메일이 복사되었습니다!!</small>}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
