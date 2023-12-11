import { Col, Container, Row } from "react-bootstrap";
import jProfile from "../assets/images/profile.png";

import "../assets/styles/about.css";

export default function About() {
  return (
    // <Container
    //   style={{
    //     justifyContent: "space-around",
    //     flexWrap: "wrap",
    //     alignItems: "center",
    //     backgroundColor: "white",
    //     margin: "0",
    //   }}
    // >
    //   <Row style={{ width: "94vw", boxShadow: "0 0 7px lightgray" }}>
    //     <Col
    //       md={6}
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         backgroundColor: "transparent",
    //       }}
    //     >
    //       <h1 className="bungeeReg">
    //         <span className="bungeeOut">JOR</span>LYNA
    //       </h1>
    //       <p>say something nice...</p>
    //       <div>
    //         <a href="#" className="mx-2">
    //           Facebook
    //         </a>
    //         <a href="#" className="mx-2">
    //           Facebook
    //         </a>
    //         <a href="#" className="mx-2">
    //           Facebook
    //         </a>
    //       </div>
    //     </Col>
    //     <Col
    //       md={6}
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         backgroundColor: "gray",
    //         borderTopLeftRadius: "10rem",
    //         borderBottomLeftRadius: "10rem",
    //       }}
    //     >
    //       <img src={jProfile} alt="temp" width={300} />
    //     </Col>
    //   </Row>
           
     
    // </Container>

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
        {/* <p class="about__content-details-para">
          write about me
          <strong></strong>
          <strong></strong>.
        </p>
        <p class="about__content-details-para">
          write about me <strong></strong> so
          
          <a
            rel="noreferrer"
            href="#"
            target="_blank"
          >
            Linkedin
          </a>
          where I post useful content related to Web Development and
          Programming
        </p>
        <p class="about__content-details-para">
          I'm open to <strong>Job</strong> opportunities where I can
          contribute, learn and grow. If you have a good opportunity
          that matches my skills and experience then don't hesitate to
          <strong>contact</strong> me.
        </p> */}
      </div>
      <a href="/contact" class="btn btn--med btn--theme dynamicBgClr">
        Contact
      </a>
    </div>
    <div class="about__content-skills">
      <h3 class="about__content-title">My Skills</h3>
      <div class="skills">
        <div class="skills__skill">HTML</div>
        <div class="skills__skill">CSS</div>
        <div class="skills__skill">JavaScript</div>
        <div class="skills__skill">React</div>
        <div class="skills__skill">SASS</div>
        <div class="skills__skill">GIT</div>
        <div class="skills__skill">Github</div>
        <div class="skills__skill">Responsive Design</div>
        <div class="skills__skill">SEO</div>
        <div class="skills__skill">Terminal</div>
        <div class="skills__skill">Express Basics</div>
        <div class="skills__skill">SQL Basics</div>
      </div>
    </div>
  </div>
</div>
</section>
  );
}
