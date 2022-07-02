import React from "react";

const Skill = ({ changeNav }) => {
  return (
    <div className={changeNav ? "container-div wider-screen" : "container-div"}>
      <h1 className="hashtag-title">#SKILL SET</h1>
      <div className="skill-div">
        <section className="skill-showcase">
          <input type="checkbox" id="section1" name="display-detail" />
          <label htmlFor="section1" id="react">
            ReactJS
          </label>
          <article>
            - JSX, Hook, state, props 등 기본개념 이해 및 활용
            <br />
            - API활용 개발
            <br />
            - 다양한 npm 패키지 접목한 구현
            <br />- 함수형 컴포넌트 위주의 개발 경험
          </article>
        </section>
        <span className="draw-line"></span>
        <section className="skill-showcase">
          <input type="checkbox" id="section2" name="display-detail" />
          <label htmlFor="section2" id="markup">
            HTML5 CSS3(Scss)
          </label>
          <article>
            - 레이아웃 구현시 시멘틱 태그 활용
            <br />
            - 반응형 웹페이지 구현
            <br />
            - animation, transform 활용
            <br />
          </article>
        </section>

        <section className="skill-showcase">
          <input type="checkbox" id="section3" name="display-detail" />
          <label htmlFor="section3" id="js">
            JavaScript(ES6)
          </label>
          <article>
            - nodeJS와 express로 백엔드 구현 <br />
            - cheerio를 이용한 웹 스크래핑 <br />
            - 내장 함수 객체와 객체의 메소드 활용
            <br />
            - DOM을 활용한 css 제어 및 이벤트 처리
            <br />- 로컬스토리지 활용
          </article>
        </section>

        <section className="skill-showcase">
          <input type="checkbox" id="section4" name="display-detail" />
          <label htmlFor="section4" id="java">
            JAVA
          </label>
          <article>
            - JDBC로 JSP 게시판 구현
            <br />
            - SpringMVC를 활용한 웹 프로젝트 경험
            <br />- 알고리즘 스터디 운영 경험(2달 주3회)
          </article>
        </section>
        <span className="draw-line"></span>
        <span className="draw-line"></span>
        <section className="skill-showcase">
          <input type="checkbox" id="section5" name="display-detail" />
          <label htmlFor="section5" id="sql">
            SQL(Oracle, MySQL)
          </label>
          <article>
            - 엔터티, 속성, 관계, 식별자 이론적 개념 이해
            <br />
            - DML, DDL, DCL, TCL등 기본적인 지식 및 활용
            <br />
            - 단일행 함수, 집계형 함수 학습 및 실습
            <br />
          </article>
        </section>
        <section className="skill-showcase">
          <input type="checkbox" id="section6" name="display-detail" />
          <label htmlFor="section6" id="etc">
            etc
          </label>
          <article>
            - Python : 코세라 입문교육 수료, 웹 스크래핑 과제 경험
            <br />
            - C언어 : KGITBANK 입문과정 교육
            <br />
            - JSP : 웹 프로젝트에서 활용 경험
            <br />
            - redux : 학습 및 실습
            <br />- AWS(RDS) , firebase , heroku : 사용 경험
          </article>
        </section>
      </div>
    </div>
  );
};

export default Skill;
