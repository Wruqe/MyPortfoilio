/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import { NavBar } from "./components/navbar";
import { Banner } from "./components/Banner";
import Cards from "./components/card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Slappi from "./assets/slappi.png";
import techlines from "./assets/techlines.png";
import Exp from "./components/exp";
import ExpIcon from "./assets/experience.png";
import Tab from "./components/tab";
import EduIcon from "./assets/education.png";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Banner />
          </Col>
        </Row>
        <section>
          <h2 id="projects" href="/projects" className="text-center mb-0 mt-5">
            My Projects
          </h2>
          <div className="justify-content-center d-lg-flex gap-3 pb-5">
            <Cards
              title="Techlines"
              text="FullStack Meme blog, with chat communication."
              button="Link"
              pic={techlines}
            />
            <Cards
              title="SlapAPI"
              text="FullStack Social blog. Visit other users, comment, blog! "
              button="Link"
              pic={Slappi}
            />
          </div>
        </section>
        <section>
          <Row>
            <Col>
              <h2 id="skills" className="text-center mt-0 mb-0 mt-5">
                Skills
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center text-center">
            <Col xs="auto" className=" mt-5">
              <h2>Front End!</h2>
              <Exp skill="React" />
              <Exp skill="JavaScript" />
              <Exp skill="Html" />
              <Exp skill="Css" />
              <Exp skill="Bootstrap" />
            </Col>
            <Col xs="auto" className="mt-5">
              <h2>Backend!</h2>
              <Exp skill="Git" />
              <Exp skill="MySQL" />
              <Exp skill="MongoDB" />
              <Exp skill="Node Js" />
              <Exp skill="Express JS" />
            </Col>
          </Row>
          </section>
          <h2 className="text-center mt-5">About me!</h2>
          <Row>
            <Tab
              ExpIcon={EduIcon}
              details="Experience"
              info="1.5 years
Fullstack Development, Building Social Blogs, Company websites, RESTFUL API's!"
              info2="Internship Experience building client websites"
            />

            <Tab
              ExpIcon={ExpIcon}
              details="Education"
              info="Michigan State University Full-Stack Certification"
              info2="CIS Associates Degree Soon!"
            />
            <h2 className="mt-5">Get to know more!</h2>
            <p className="mb-5">
              "Passionate about creating seamless and innovative digital
              experiences, I am a seasoned full stack developer with a knack for
              turning ideas into functional, user-friendly applications. With a
              strong foundation in both front-end and back-end technologies, I
              thrive on solving complex problems and building robust, scalable
              solutions. My expertise spans across languages like JavaScript,
              Python, and Java, coupled with proficiency in frameworks like
              React, Node.js, and Django. I take pride in staying updated with
              the latest industry trends and best practices to deliver
              cutting-edge solutions. Let's collaborate to bring your next
              project to life!"
            </p>
          </Row>
      </Container>
    </div>
  );
}

export default App;
