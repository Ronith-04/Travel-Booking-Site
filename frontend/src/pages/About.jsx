// import React from 'react'
import React from "react";
import '../styles/About.css';
import { Container, Row, Col } from "reactstrap";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Subtitle from "./../shared/Subtitle";
import Newsletter from "../shared/Newsletter";
import { ImEarth } from "react-icons/im";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiThreeFriends } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
// import ServiceCard from "../services/ServiceCard";
import  "../services/servicecard.css";

const About = () => {
  return (
    <>
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'About Us'}/>
                    <div className="about__info">
                        <p >
                    Travel is the only thing you buy that makes you richer”. We completely swear by this and believe in fulfilling travel dreams that make you invariably rich by the day. We have been selling beautiful experiences for years through our state-of-the-art designed holiday packages and other essential travel services. We inspire our customers to live a rich life, full of unforgettable travel experiences.
                        </p>
                        <p>
                    Through our specially curated holiday packages, we want to take you on a journey where you intimately indulge with the exquisite beauty of India and distant lands. Our travel experts are unceasingly working to provide you with exquisite travel experiences. “To travel is to live”- And we believe in going beyond the roots of this statement. We believe in making travel accessible to everyone by offering the best domestic and international tour packages.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>

    </section>
    <section>
        <Container>
             <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'why_us'}/>
                    <Col  lg='12' md='12' sm='8' className="d-flex align-items-center justify-content-center why__us">
                        <span>
                            <ImEarth className="icon"/>
                            <h5> Best of the Places</h5>
                        </span>
                        <span>
                            <FaHandHoldingDollar className="icon" />
                            <h5> Best of the Prices</h5>
                        </span>
                        <span>
                            <GiThreeFriends  className="icon"/>
                            <h5> Huge Group Discounts</h5>
                        </span>
                        <span>
                            <VscWorkspaceTrusted className="icon" />
                            <h5> Most Trusted</h5>
                        </span>
                    </Col>


                </Col>
            </Row>
        </Container>
    </section>
        <section>
            <Container>
                 <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Gallery'}/>
                        <h2 className="gallery__title"> 
                            Visit our customers tour gallery.</h2>
                            <p>These were the best moments of their lives that they had lived with us, with out best of tour packages at the best of places for such affordable prices.</p>
                        
                    </Col>
                    <Col lg='12'>
                        <MasonryImagesGallery/>
                    </Col>
                </Row>
            </Container>
        </section>
        <Newsletter/>

    </>
  )
}

export default About