import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Architecture Student", "Interior Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">
                  Welcome to my Portfolio
                </span>
                <h1>
                  {`Hi! I'm Vedant Hire `}
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Architecture Student", "Interior Designer" ]'>
                    <span className="wrap">{text}
                      </span>
                    </span>
                  </h1>
                  <p>
                    I'm a visionary architect with a passion for designing spaces that seamlessly blend functionality, aesthetics, and sustainability. With little experience in the field, I specializes in creating innovative architectural solutions that reflect both modern trends and timeless elegance.
                    <br />
                    From residential homes to commercial structures, I approaches each project with a keen eye for detail and a deep understanding of client needs. My expertise in architectural design, urban planning, and interior spaces ensures that every structure I designs is not just visually stunning but also practical and sustainable.
                    <br />
                    Driven by creativity and precision, I transforms ideas into reality, crafting spaces that inspire and elevate the way people live and work.
                  </p>
                  <a href="https://drive.google.com/file/d/1aWQBeYPvLGDF1a8Wklak7DjUMAgsITVE/view?usp=drivesdk" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                  <button style={{
                    display: 'inline-block',
                    padding: '15px 30px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: 'white',
                    background: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
                    border: '2px solid rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  }}>
                    <span>My Resume</span>
                  </button>
                </a>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
