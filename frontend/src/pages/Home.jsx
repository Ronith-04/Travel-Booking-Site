import React from "react";
import '../styles/Home.css';
import { Container, Row, Col } from "reactstrap";
import worldImg from "../assets/images/world.png";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "./../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/FeaturedTours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import NewsLetter from "../shared/Newsletter";


const Home = () => {
    return (<>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__content">
                        <div className="hero__subtitle d-flex align-items-center">
                            <Subtitle subtitle={'Know Before You Go'}/>
                            <img src={worldImg} alt="" />
                        </div>
                        <h1>Travelling opens the door to creating  <span className="highlight">memories</span></h1>
                        <p>Traveling is a great way to escape. You get to see new things and experience new cultures. It’s a great way to get away from the hustle and bustle of everyday life and relax. But, it can also be stressful if you don’t know here you're going. That’s why we created this site for you guys! We want to help make your next trip as stress-free as possible by giving you some edge on how to plan for it.
                        </p>
                    </div>
                </Col>

                <Col lg='2'>
                    <div className="hero__img-box">
                        <img src={heroImg} alt="" />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box hero__video-box mt-4">
                        <video src={heroVideo} alt="" controls />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box mt-5">
                        <img src={heroImg02} alt="" />
                    </div>
                </Col>
                <SearchBar />
            </Row>
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services__subtitle">What we serve</h5>
                    <h2 className="services__title">We offer our best services</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
    </section>

    {/*featured tour section start*--------------*/}
    <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-5">
                    <Subtitle subtitle={'Explore'}/>
                    <h2 className="featured__tour-title">Our Featured Tours</h2>

                </Col>
                <FeaturedTourList/>
            </Row>
        </Container>
    </section>

    {/*===============experience section start================*/}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="experience__content">
                        <Subtitle subtitle={'Experience'}/>
                        <h2 className="experience__title">
                            With our all experience<br/> we will serve you
                        </h2>
                        <p>Traveling is a great way to escape.<br/> You get to see new things and experience new cultures.
                        </p>
                    </div>
                    <div className="counter__wrapper d-flex align-items-center gap-5">
                        <div className="counter__box">
                            <span>12k+</span>
                            <h6>Successful Trips</h6>
                        </div>
                        <div className="counter__box">
                            <span>2k+</span>
                            <h6>Regular Clients</h6>
                        </div>
                        <div className="counter__box">
                            <span>15+</span>
                            <h6>Years of experience</h6>
                        </div> 
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="experience__img">
                        <img src={experienceImg} alt="" />
                    </div>  
                </Col>
            </Row>
        </Container>
    </section>
    
    {/*===================gallery section=========*/}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Gallery'}/>
                    <h2 className="gallery__title"> 
                        Visit our customers tour gallery
                    </h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
    </section>

    {/*==========testimonial section=========*/}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Fans Love'}/>
                    <h2 className="testimonial__title">What our fans say about us</h2>

                </Col>
                <Col lg='12'>
                    <Testimonials/>
                </Col>
            </Row>
        </Container>
    </section>
    <NewsLetter/>
    </>
    );
}


export default Home;