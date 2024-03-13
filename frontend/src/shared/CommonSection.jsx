import React from 'react'
import './commonsection.css'
import {Container, Col, Row} from 'react-bootstrap'

const CommonSection = ({title}) => {
  return (
    <section className="common__section">
        <Container>
            <Row>
                <Col lg='12'>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection