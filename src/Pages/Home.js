import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Timeline from '../Components/Timeline';

function Home() {
    return(
    <main>
      <Container fluid={true}>
        <Row className="homepage-intro-box">
          <Col className="col-2"></Col>
          <Col className="min-w-280">
            <div className="text-outer">
              <div className="text-inner">
                <h1 className="homepage-intro-text">
                  Catchy Title Here
                </h1>
                <p className="homepage-intro-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nulla enim, aliquam vitae 
                  tortor sed, pretium pellentesque mi. Vivamus accumsan, quam sit amet interdum bibendum
                </p>
              </div>
            </div>
          </Col>
          <Col className="col-4 min-w-280">
            <div className="text-outer">
              <div className="text-inner">
              <Image src="https://placehold.co/600x400" fluid rounded />
              </div>
            </div>
          </Col>
          <Col className="col-2"></Col>
        </Row>
        <Row className="homepage-intro">
          <Col className="col-1"></Col>
          <Col className="col-4">
          <Timeline/>
          </Col>

          <Col></Col>
          <Col className="col-2"></Col>
        </Row>
        
      </Container>
    </main>
    );
}

export default Home