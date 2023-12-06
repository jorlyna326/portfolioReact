import { Col, Container, Row } from "react-bootstrap";
import jProfile from '../assets/images/profile.png'

export default function About() {
  return (
    <>
      <Container
        style={{
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "center",
    backgroundColor: 'white',
          margin: "0",
        }}
      >
        <Row style={{width: '94vw', boxShadow: "0 0 7px lightgray",}}>
          <Col md={6} style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
            <h1>JORLYNA</h1>
            <p>say something nice</p>
            <div>
              <a href="#">Facebook</a>
              <a href="#">Facebook</a>
              <a href="#">Facebook</a>
            </div>
          </Col>
          <Col md={6} style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'gray', borderTopLeftRadius: '10rem', borderBottomLeftRadius: '10rem'}}>
            <img src={jProfile} alt="temp" width={400} />
          </Col>
        </Row>
        {/* <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', flex: '0 0 50%'}}>
          <h1>JORLYNA</h1>
          <p>say something nice</p>
          <div>
            <a href="#">Facebook</a>
            <a href="#">Facebook</a>
            <a href="#">Facebook</a>
          </div>
        </div>
        <div>
          <img src="#" alt="Jorlyna profile" />
        </div> */}
      </Container>
    </>
  );
}
