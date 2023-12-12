import { Col, Container, Row } from "react-bootstrap";
import jProfile from "../assets/images/profile.png";
import { IoLogoJavascript } from "react-icons/io5";
import { TfiHtml5 } from "react-icons/tfi";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";





import "../assets/styles/about.css";

export default function About() {
  return (
<section
class="about "
style={{
  justifyContent: "space-around",
  flexWrap: "wrap",
  alignItems: "center",
  backgroundColor: "white",
  margin: "0",
}}
>
 <Container
       style={{
         justifyContent: "space-around",
         flexWrap: "wrap",
         alignItems: "center",
         backgroundColor: "white",
         margin: "0",
       }}
     >
       <Row style={{ width: "94vw", boxShadow: "0 0 7px lightgray" }}>
         <Col
           md={6}
           style={{
             display: "flex",
             flexDirection: "column",
             alignItems: "center",
             justifyContent: "center",
             backgroundColor: "transparent",
           }}
         >
           <h1 className="bungeeReg">
             <span className="bungeeOut">JOR</span>LYNA
           </h1>
           <p>say something nice...</p>
           <div>
             <a href="#" className="mx-2">
               Facebook
             </a>
             <a href="#" className="mx-2">
               Facebook
             </a>
             <a href="#" className="mx-2">
               Facebook
             </a>
           </div>
         </Col>
         <Col
           md={6}
           style={{
             display: "flex",
             justifyContent: "center",
             backgroundColor: "gray",
             borderTopLeftRadius: "10rem",
             borderBottomLeftRadius: "10rem",
           }}
         >
           <img src={jProfile} alt="temp" width={300} />
         </Col>
       </Row>
           
     
     </Container>
<div class="main-container">
  
  <h2 class="heading heading-sec heading-sec__mb-med">
    <span class="heading-sec__main">About Me</span>
    <span class="heading-sec__sub">
      Here you will find more information about me, what I do, and my
      current skills mostly in terms of programming and technology
    </span>
  </h2>
  <div class="about__content">
    <div class="about__content-main">
      <h3 class="about__content-title">Get to know me!</h3>
      <div class="about__content-details">
        
         <div class ="about__content-details-para">
         I am a recent graduate from the University of Central Florida's coding bootcamp, now venturing into the dynamic realm of Full Stack Web Development. Drawing from 10 years of background in Account Executive and Management roles, I bring a unique blend of strategic thinking and leadership skills to my technical expertise. I am a tenacious problem solver, dedicated to continuous learning and growth. My resilience, unwavering perseverance, and genuine kindness define my approach to challenges, while my collaborative spirit ensures seamless teamwork. As I embark on this exciting journey, I am eager to contribute my skills and passion for innovation to projects that inspire creativity and drive positive change.
          </div>  
      </div>
      <a href="/contact" class="btn btn--med btn--theme dynamicBgClr">
        Contact
      </a>
    </div>
    <div class="about__content-skills">
      <h3 class="about__content-title">My Skills</h3>
      <div class="skills">
        <div class="skills__skill"><TfiHtml5 /></div>
        <div class="skills__skill"><FaCss3Alt /></div>
        <div class="skills__skill"><IoLogoJavascript /></div>
        <div class="skills__skill"><FaReact /></div>
        <div class="skills__skill"><FaGitAlt /></div>
        <div class="skills__skill"><FaGithub /></div>
        <div class="skills__skill"><MdDevices /></div>
        <div class="skills__skill"><IoTerminal /></div>
        <div class="skills__skill">Express Basics</div>
        <div class="skills__skill">SQL Basics</div>
        <div class="skills__skill">Insomnia</div>
        <div class="skills__skill">Mongo</div>
        <div class="skills__skill">Apollo</div>
        <div class="skills__skill">Mongoose</div>
      </div>
    </div>
  </div>
</div>
</section>
  );
}
