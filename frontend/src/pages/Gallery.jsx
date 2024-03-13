import React from 'react'
import { Container, Row, Col } from "reactstrap";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Subtitle from "./../shared/Subtitle";
import Newsletter from "../shared/Newsletter";

const Gallery = () => {
  return (
    <div>
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

    </div>
  )
}

export default Gallery