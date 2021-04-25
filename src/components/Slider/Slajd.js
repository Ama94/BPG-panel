import './Slajd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Slider from "./Slider"
import Info from "./Info"
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

class Slajd extends React.Component {
    render() {
        return (
            <Card className={"mb-4 mt-4"}>
                <Row>
                    <Col md={6} ml={2} mr={2}>
                        <Row noGutters className={"mb-2"}>
                            <div className={"slider-images"}>
                                <Slider></Slider>
                            </div>
                        </Row>
                        <Row noGutters>
                            <Card.Subtitle><Info></Info></Card.Subtitle>
                        </Row>
                    </Col>
                    <Col md={6} ml={8} mr={8}>
                        <Card.Body>
                            <Row className={"justify-content-md-center"}>
                                <Card.Title className={"mb-2"}><h1>Skaning 3D</h1></Card.Title>
                            </Row>
                            <Card.Text className={"mt-2 card-trunc"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at beatae
                                blanditiis debitis delectus earum error, esse facere harum hic iure necessitatibus nisi
                                optio, pariatur quisquam quod sunt tempore tenetur.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default Slajd;