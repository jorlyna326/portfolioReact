import { Col, Container, Row } from "react-bootstrap";
import jProfile from "../assets/images/profile.png";

export default function About() {
  return (
    <>
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
        <Row>
          <Col md={12}>
            <p>about me</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
